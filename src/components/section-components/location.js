import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import tunisiaGeoJSON from './states.geojson'; // Import your Tunisia GeoJSON file
import axios from 'axios'; // Import axios for making API calls
import { CircularProgress, Box } from '@mui/material'; // Import CircularProgress and Box from Material-UI

const Location = () => {
    const [averagePriceByState, setAveragePriceByState] = useState({});
    const [loading, setLoading] = useState(true); // Add a loading state
    const hoveredStateRef = useRef(null);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);  // Ref to store map instance
    const mapInitialized = useRef(false);

    const fetchAllProducts = async () => {
        try {
            const body = { 
                ville: ['ARIANA', "TUNIS", "NABEUL", "BEN AROUS", "SOUSSE", "MANOUBA", "MAHDIA", "SFAX", "GABES", "KEF", "KAIROUAN", "BIZERTE", "GAFSA", "TOZEUR", "TATAOUINE", "MEDNINE", "JENDOUBA", "ZAGHOUAN", "SILIANA", "KASSERINE", "MONASTIR", "KEBILI", 'BEJA', 'SIDI BOUZID'],
                type: "Vente",
                itemPerPage: "3000"
            };
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/v2/biens`, body, {
                headers: {
                    Authorization: 'jkaAVXs852ZPOnlop795',
                },
            });

            const fetchedProducts = Array.isArray(response.data.resultat) ? response.data.resultat : [];
            console.log(response.data.resultat);

            const stateData = fetchedProducts.reduce((acc, product) => {
                const state = product.ville;
                if (!acc[state]) {
                    acc[state] = { totalPrice: 0, totalCount: 0 };
                }
                acc[state].totalPrice += product.prixVente || 0;
                acc[state].totalCount += 1;
                return acc;
            }, {});

            const averages = Object.fromEntries(
                Object.entries(stateData).map(([state, data]) => [
                    state,
                    { averagePrice: data.totalPrice / data.totalCount, totalItems: data.totalCount },
                ])
            );

            setAveragePriceByState(averages);
            setLoading(false);  // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching all products:', error);
            setLoading(false);  // Also set loading to false if there's an error
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            await fetchAllProducts();
        };

        fetchData();
    }, []); // Fetch data on mount

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
                        const stateName = features[0].properties.gouv_fr;

                        if (hoveredStateRef.current !== stateName) {
                            hoveredStateRef.current = stateName;

                            const stateData = averagePriceByState[stateName] || {};
                            const { averagePrice = 0, totalItems = 0 } = stateData;

                            mapInstance.setPaintProperty(
                                'state-fills',
                                'fill-color',
                                [
                                    'case',
                                    ['==', ['get', 'gouv_fr'], stateName],
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
                                        Prix moyen: ${averagePrice.toLocaleString()} TND<br/>
                                        Nombre des bien: ${totalItems}
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
            <div className="ltn__google-map-locations-area">
                <div
                    id="map"
                    ref={mapContainerRef}
                    style={{ height: '700px', width: '100%' }}
                />
            </div>
        </div>
    );
};

export default Location;
