import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Select, MenuItem, FormControl, InputLabel, CircularProgress, Box } from '@mui/material';
import tunisiaGeoJSON from './states.geojson'; 
import axios from 'axios';

const CartePrix = ({ headertitle, subheader, customclass }) => {
    const location = useLocation();
    const [typeCategorie, setTypeCategorie] = useState(location.state?.typeCategorie || '');
    const [averagePriceByState, setAveragePriceByState] = useState({});
    const [loading, setLoading] = useState(true);
    const hoveredStateRef = useRef(null);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const mapInitialized = useRef(false);

    const HeaderTitle = headertitle;
    const publicUrl = process.env.PUBLIC_URL + '/';
    const Subheader = subheader || HeaderTitle;
    const Img = '24.jpg';

    const fetchAllProducts = async () => {
        try {
            const body = {
                ville: [],
                delegation:[],
                type: "Vente",
                typeCategorie: typeCategorie === "" ? [] : [typeCategorie], 
                itemPerPage: "3000"
            };
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/v2/biens`, body, {
                    headers: {
                        Authorization: 'jkaAVXs852ZPOnlop795',
                    },
            });

            const fetchedProducts = Array.isArray(response.data.resultat) ? response.data.resultat : [];
            const stateData = fetchedProducts.reduce((acc, product) => {
                const state = product.delegation.charAt(0).toUpperCase() + product.delegation.slice(1).toLowerCase();
                
                // Initialize state if it doesn't exist
                if (!acc[state]) {
                    acc[state] = { totalPrice: 0, totalCount: 0 };
                }
            
                // Safely access 'superficieTotal' and handle cases where it might be missing
                // Ensure superficieTotal is a valid number (fallback to 0 if null or not a number)
                const superficieTotal = Number(product.caracteristiqueBien?.superficieTotal) || (product.caracteristiqueTerrain?.superficie_terrain_totale) ; // Convert to number
                
                console.log(superficieTotal)
                // Debug logging to check what we're adding
                console.log(`Product: ${product.title}, SuperficieTotal: ${superficieTotal}`);
                
                // Add price, using 0 as default for missing price
                acc[state].totalPrice += product.prixVente || 0;
            
                // Add superficieTotal to totalCount only if it's valid (greater than 0)
                if (superficieTotal > 0) {
                    console.log(`Adding superficieTotal for ${state}: ${superficieTotal}`);
                    acc[state].totalCount += superficieTotal;
                } else {
                    console.log(`Skipping invalid superficieTotal for ${state}`);
                }
            
                return acc;
            }, {});
            
            console.log(stateData);
            
            
            
            const averages = Object.fromEntries(
                Object.entries(stateData).map(([state, data]) => [
                    state,
                    {
                        averagePrice: data.totalCount > 0 ? data.totalPrice / data.totalCount : 0, // Prevent division by zero
                    },
                ])
            );
            

            setAveragePriceByState(averages);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching all products:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchAllProducts();
    }, [typeCategorie]);

    useEffect(() => {
        if (loading) return; // Do not initialize the map if data is still loading

        mapboxgl.accessToken = 'pk.eyJ1IjoibGVhZGVyc2RldiIsImEiOiJjbTNtcXBzbWcwdjNnMmtwZTZ1YXNlb3ZwIn0.KjNcvhpCJUxUgZx-I54ppg';

        if (!mapInitialized.current && mapContainerRef.current) {
            const mapInstance = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [9.5375, 33.8869],
                zoom: 6,
            });

            mapInstance.addControl(new mapboxgl.NavigationControl({ showZoom: true, showCompass: false }));

            mapInstance.on('load', () => {
                mapInstance.addSource('tunisia-states', {
                    type: 'geojson',
                    data: tunisiaGeoJSON,
                });

                mapInstance.addLayer({
                    id: '3d-buildings',
                    source: 'composite',
                    'source-layer': 'building',
                    type: 'fill-extrusion',
                    minzoom: 15,
                    paint: {
                        'fill-extrusion-color': '#aaa',
                        'fill-extrusion-height': ['get', 'height'],
                        'fill-extrusion-base': ['get', 'min_height'],
                        'fill-extrusion-opacity': 0.6,
                    },
                });

                mapInstance.addLayer({
                    id: 'state-fills',
                    type: 'fill',
                    source: 'tunisia-states',
                    layout: {},
                    paint: {
                        'fill-color': '#888888',
                        'fill-opacity': 0.2,
                    },
                });

                mapInstance.addLayer({
                    id: 'state-borders',
                    type: 'line',
                    source: 'tunisia-states',
                    layout: {},
                    paint: {
                        'line-color': '#ffffff',
                        'line-width': 2,
                    },
                });

                let popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                });

                mapInstance.on('mousemove', (e) => {
                    const features = mapInstance.queryRenderedFeatures(e.point, {
                        layers: ['state-fills'],
                    });

                    if (features.length > 0) {
                        const stateName = features[0].properties.del_fr;

                        if (hoveredStateRef.current !== stateName) {
                            hoveredStateRef.current = stateName;

                            const stateData = averagePriceByState[stateName] || {};
                            const { averagePrice = 0, totalItems = 0 } = stateData;

                            mapInstance.setPaintProperty(
                                'state-fills',
                                'fill-color',
                                [
                                    'case',
                                    ['==',  ['get', 'del_fr'], stateName],
                                    'green', 
                                    '#888888',
                                ]
                            );

                            const coordinates = features[0].geometry.coordinates;
                            const center = Array.isArray(coordinates) && coordinates[0]?.[0];

                            if (
                                center &&
                                Array.isArray(center) &&
                                center.length === 2 &&
                                !isNaN(center[0]) &&
                                !isNaN(center[1])
                            ) {
                                popup
                                    .setLngLat(center)
                                    .setHTML(`
                                        <strong>${stateName}</strong><br/>
                                        Prix moyen M2: ${averagePrice.toLocaleString()} TND<br/>
                                
                                    `)
                                    .addTo(mapInstance);
                            } else {
                                popup.remove();
                            }
                        }
                    } else {
                        hoveredStateRef.current = null;
                        popup.remove();
                    }
                });

                mapInstance.on('mouseleave', () => {
                    hoveredStateRef.current = null;
                    mapInstance.setPaintProperty('state-fills', 'fill-color', '#888888');
                    popup.remove();
                });
            });

            mapRef.current = mapInstance;  // Store the map instance in the ref
            mapInitialized.current = true;
        }

        // Cleanup function
        return () => {
            if (mapRef.current) {
                // Only clean up if the map instance is still available
                mapRef.current.off('mousemove');  // Remove mousemove event listener
                mapRef.current.off('mouseleave'); // Remove mouseleave event listener
                mapRef.current.remove(); // Remove the map instance
                mapRef.current = null;  // Clear the map ref
                mapInitialized.current = false;
            }
        };
    }, [averagePriceByState, loading]);  // Re-run map initialization when averagePriceByState or loading changes

    // Return the loading spinner centered in the section
    if (loading) {
        return (
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '700px' 
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div>
            <div className={`ltn__breadcrumb-area-map text-left   `}
             style={{
                backgroundImage: `url(${publicUrl}assets/img/bg/${Img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">La Carte Des Prix</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <span className="ltn__secondary-color">
                                                    <i className="fas fa-home" />
                                                </span>
                                                Accueil
                                            </Link>
                                        </li>
                                        <li>La Carte Des Prix</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ltn__car-dealer-form-item ltn__icon-building col-lg-4 col-md-6 mt-4">
                                <FormControl fullWidth>
                                    <InputLabel>Type de bien</InputLabel>
                                    <Select
                                        value={typeCategorie}
                                        onChange={(e) => setTypeCategorie(e.target.value)}
                                        label="Type de bien"
                                    >
                                        <MenuItem value="">Type de bien</MenuItem>
                                        <MenuItem value="Appartement">Appartement</MenuItem>
                                        <MenuItem value="Villa">Villa</MenuItem>
                                        <MenuItem value="Maison">Maison</MenuItem>
                                        <MenuItem value="Terrain constructible">Terrain</MenuItem>
                                        <MenuItem value="Bureau">Bureau</MenuItem>
                                        <MenuItem value="Etage de villa">Etage de villa</MenuItem>
                                        <MenuItem value="Local commercial">Local commercial</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__google-map-locations-area">
                <div id="map" ref={mapContainerRef} style={{ height: '700px', width: '100%' }} />
            </div>
        </div>
    );
};

export default CartePrix;
