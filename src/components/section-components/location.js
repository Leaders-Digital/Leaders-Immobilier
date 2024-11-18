import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Add Mapbox GL CSS import
import tunisiaGeoJSON from './states.geojson'; // Import your Tunisia GeoJSON file
import axios from 'axios'; // Import axios for making API calls

const Location = () => {
    const [map, setMap] = useState(null);
    const [averagePrice, setAveragePrice] = useState(null);
    const [totalItems, setTotalItems] = useState(null); // New state for totalItems
    const [hoveredStateName, setHoveredStateName] = useState(null); // Track hovered state name
    const mapContainerRef = React.useRef(null); // Ref for map container
    const mapInitialized = React.useRef(false); // Ref to track map initialization

    // Function to fetch products for a selected ville (state)
    const fetchProducts = (stateName) => {
        const body = {
            ville: ['Ariana'], 
        };

        axios.post(`${process.env.REACT_APP_API_URL}api/v2/biens`, body, {
            headers: {
                Authorization: 'jkaAVXs852ZPOnlop795', 
            },
        })
            .then((response) => {
                const fetchedProducts = Array.isArray(response.data.resultat) ? response.data.resultat : [];
                const total = response.data.totalItems || fetchedProducts.length;
                const totalPrice = fetchedProducts.reduce((acc, product) => acc + product.prixVente, 0);
                const average = total > 0 ? totalPrice / total : 0;
                setAveragePrice(average);
                setTotalItems(total); // Set totalItems in state
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setAveragePrice(null);
                setTotalItems(null); // Set totalItems to null if there's an error
            });
    };

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVhZGVyc2RldiIsImEiOiJjbTNtcXBzbWcwdjNnMmtwZTZ1YXNlb3ZwIn0.KjNcvhpCJUxUgZx-I54ppg'; // Replace with your actual Mapbox token

        if (!mapInitialized.current && mapContainerRef.current) {
            const mapInstance = new mapboxgl.Map({
                container: mapContainerRef.current, // Attach to the ref container
                style: 'mapbox://styles/mapbox/streets-v11', // Map style
                center: [9.5375, 33.8869], // Center of Tunisia [lng, lat]
                zoom: 6, // Default zoom level
                pitch: 0, // No 3D effect (flat map)
                bearing: 0, // No rotation (flat map)
            });

            mapInstance.addControl(new mapboxgl.NavigationControl({ showZoom: true, showCompass: false }));

            mapInstance.on('load', () => {
                mapInstance.addSource('tunisia-states', {
                    type: 'geojson',
                    data: tunisiaGeoJSON, // GeoJSON file for Tunisia states
                });

                mapInstance.addLayer({
                    id: 'state-fills',
                    type: 'fill',
                    source: 'tunisia-states',
                    layout: {},
                    paint: {
                        'fill-color': '#888888', // Default color for states
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

                let hoveredStateName = null;
                let popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                });

                mapInstance.on('mousemove', (e) => {
                    const features = mapInstance.queryRenderedFeatures(e.point, {
                        layers: ['state-fills'],
                    });

                    if (features.length > 0) {
                        const stateName = features[0].properties.gouv_fr; // Get the state name (gouv_fr)

                        if (hoveredStateName && hoveredStateName !== stateName) {
                            mapInstance.setPaintProperty('state-fills', 'fill-color', '#888888');
                            popup.remove();
                        }

                        mapInstance.setPaintProperty(
                            'state-fills',
                            'fill-color',
                            [
                                'case',
                                ['==', ['get', 'gouv_fr'], stateName],
                                '#ff0000', // Highlight selected state
                                '#888888',
                            ]
                        );

                        hoveredStateName = stateName;

                        // Fetch products and calculate the average price dynamically
                        if (stateName) {
                            fetchProducts(stateName); // Fetch products for the hovered state
                            const coordinates = features[0].geometry.coordinates;
                            let center = null;

                            // Check if coordinates are valid (i.e., have lng/lat values)
                            if (coordinates && coordinates[0] && coordinates[0].length > 0) {
                                center = coordinates[0][0]; // Default first coordinate
                            }

                            // Only set popup if valid coordinates are found
                            if (center && Array.isArray(center) && center.length === 2 && !isNaN(center[0]) && !isNaN(center[1])) {
                                popup
                                    .setLngLat(center)
                                    .setHTML(`Prix moyen: ${averagePrice ? averagePrice.toLocaleString() : 'Loading...'} TND<br/>Total items: ${totalItems !== null ? totalItems : 'Loading...'}`)
                                    .addTo(mapInstance);
                            } else {
                                popup.remove(); // Remove popup if no valid coordinates
                            }
                        }
                    }
                });

                mapInstance.on('mouseleave', 'state-fills', () => {
                    mapInstance.setPaintProperty('state-fills', 'fill-color', '#888888');
                    hoveredStateName = null;
                    setAveragePrice(null);
                    setTotalItems(null); // Reset totalItems
                    popup.remove();
                });
            });

            setMap(mapInstance);
            mapInitialized.current = true;
        }

        return () => {
            if (map) {
                map.remove(); // Ensure map is removed only if it exists
                setMap(null);
                mapInitialized.current = false;
            }
        };
    }, [map]);

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
