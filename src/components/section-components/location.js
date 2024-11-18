import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import 'mapbox-gl/dist/mapbox-gl.css'; // Add Mapbox GL CSS import
import tunisiaGeoJSON from './states.geojson'; // Import your Tunisia GeoJSON file

const Location = () => {
    const [map, setMap] = useState(null);
    const [selectedState, setSelectedState] = useState('');
    const mapContainerRef = React.useRef(null); // Ref for map container
    const mapInitialized = React.useRef(false); // Ref to track map initialization

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVhZGVyc2RldiIsImEiOiJjbTNtcXBzbWcwdjNnMmtwZTZ1YXNlb3ZwIn0.KjNcvhpCJUxUgZx-I54ppg';

        if (!mapInitialized.current && mapContainerRef.current) {
            const mapInstance = new mapboxgl.Map({
                container: mapContainerRef.current, // Attach to the ref container
                style: 'mapbox://styles/mapbox/streets-v11', // Map style
                center: [9.5375, 33.8869], // Center of Tunisia [lng, lat]
                zoom: 6, // Default zoom level
                pitch: 0, // No 3D effect (flat map)
                bearing: 0, // No rotation (flat map)
            });

            // Add zoom control (+/-)
            mapInstance.addControl(new mapboxgl.NavigationControl({ showZoom: true, showCompass: false }));

            // Add GeoJSON data as a source
            mapInstance.on('load', () => {
                mapInstance.addSource('tunisia-states', {
                    type: 'geojson',
                    data: tunisiaGeoJSON, // GeoJSON file for Tunisia states
                });

                // Add a fill layer for states (Boundaries only)
                mapInstance.addLayer({
                    id: 'state-fills',
                    type: 'fill',
                    source: 'tunisia-states',
                    layout: {},
                    paint: {
                        'fill-color': '#888888', // Default color for states
                        'fill-opacity': 0.2, // Transparency (keep it subtle)
                    },
                });

                // Add an outline for the states
                mapInstance.addLayer({
                    id: 'state-borders',
                    type: 'line',
                    source: 'tunisia-states',
                    layout: {},
                    paint: {
                        'line-color': '#ffffff', // Border color
                        'line-width': 2, // Make the borders more prominent
                    },
                });

                let hoveredStateId = null; // Variable to store the hovered state id

                // Add hover effect to change the fill color of the hovered state
                mapInstance.on('mousemove', (e) => {
                    const features = mapInstance.queryRenderedFeatures(e.point, {
                        layers: ['state-fills'], // Specify the layer to check
                    });

                    if (features.length > 0) {
                        const stateId = features[0].properties.gouv_id; // Get the state ID (gouv_id)

                        if (hoveredStateId && hoveredStateId !== stateId) {
                            // Reset the fill color of the previously hovered state
                            mapInstance.setPaintProperty('state-fills', 'fill-color', '#888888'); // Reset color to original
                        }

                        // Highlight the current hovered state
                        mapInstance.setPaintProperty(
                            'state-fills',
                            'fill-color',
                            [
                                'case',
                                ['==', ['get', 'gouv_id'], stateId], // Match the hovered state by ID
                                '#ff0000', // Red color for the hovered state
                                '#888888', // Default color for all other states
                            ]
                        );

                        hoveredStateId = stateId; // Store the current hovered state ID
                    }
                });

                // Reset the color when the mouse leaves the map
                mapInstance.on('mouseleave', 'state-fills', () => {
                    mapInstance.setPaintProperty('state-fills', 'fill-color', '#888888'); // Reset fill color for all states
                    hoveredStateId = null; // Clear hovered state ID
                });
            });

            setMap(mapInstance);
            mapInitialized.current = true; // Mark map as initialized
        }

        return () => {
            if (map) {
                map.remove(); // Ensure cleanup
                setMap(null);
                mapInitialized.current = false; // Reset initialization flag
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
