import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { debounce } from 'lodash';

import 'mapbox-gl/dist/mapbox-gl.css'; // Add Mapbox GL CSS import

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

    useEffect(() => {
        let markers = []; // Track markers

        const updateMap = debounce(() => {
            if (map && selectedState) {
                const locations = getLocationsByState(selectedState);

                // Debug log to validate data
                console.log('Selected State:', selectedState, 'Locations:', locations);

                // Remove existing markers
                markers.forEach(marker => marker.remove());
                markers = [];

                if (locations.length === 0) {
                    console.log('No locations found for:', selectedState);
                }

                // Add new markers
                locations.forEach(location => {
                    const marker = new mapboxgl.Marker()
                        .setLngLat([location.lng, location.lat])
                        .setPopup(new mapboxgl.Popup().setText(location.address))
                        .addTo(map);
                    markers.push(marker);
                });

                if (locations.length > 0) {
                    const bounds = new mapboxgl.LngLatBounds();
                    locations.forEach(location => bounds.extend([location.lng, location.lat]));
                    map.fitBounds(bounds, {
                        padding: 20,
                        duration: 1000,
                        maxZoom: 12,
                    });
                } else {
                    map.flyTo({
                        center: [9.5375, 33.8869],
                        zoom: 6,
                    });
                }

                window.scrollTo(0, 0);
            }
        }, 300); // Debounce for 300ms

        updateMap();

        return () => {
            updateMap.cancel();
            markers.forEach(marker => marker.remove()); // Cleanup markers on unmount or re-render
        };
    }, [map, selectedState]);

    const getLocationsByState = (state) => {
        const mockData = {
            'Ariana': [
                { lat: 36.863053, lng: 10.160303, address: 'the penthouse' },
            ],
            'Beja': [
                { lat: 36.7254, lng: 9.1812, address: 'Beja, Tunisia' },
            ],
            'Ben Arous': [
                { lat: 36.7401, lng: 10.2271, address: 'Ben Arous, Tunisia' },
            ],
        };
        return mockData[state] || [];
    };

    return (
        <div>
            <div className="ltn__google-map-locations-area">
                <div
                    id="map"
                    ref={mapContainerRef}
                    style={{ height: '500px', width: '100%' }} 
                />
            </div>

            <div className="ltn__google-map-locations-list-area mt-115 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__location-search mb-100">
                                <div className="section-title-area ltn__section-title-2">
                                    <h1 className="section-title">Trouver à proximité<span>.</span></h1>
                                </div>
                                <form className="clearfix">
                                    <h3>Ville</h3>
                                    <div className="input-item">
                                        <FormControl fullWidth>
                                            <InputLabel>Ville</InputLabel>
                                            <Select
                                                value={selectedState}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                                label="Your State"
                                            >
                                                <MenuItem value="">Make A Selection</MenuItem>
                                                <MenuItem value="Ariana">Ariana</MenuItem>
                                                <MenuItem value="Beja">Beja</MenuItem>
                                                <MenuItem value="Ben Arous">Ben Arous</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
