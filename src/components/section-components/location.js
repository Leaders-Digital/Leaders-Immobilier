import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Location = () => {
    useEffect(() => {
        const $ = window.$;
        
        let publicUrl = process.env.PUBLIC_URL + '/';

        // Create and load the Google Maps script
        const mapscript = document.createElement("script");
        mapscript.async = true;
        mapscript.defer = true;
        mapscript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeHDCOXmUMja1CFg96RbtyKgx381yoBU&callback=initMap';

      
        window.initMap = () => {
           
            const minscript = document.createElement("script");
            minscript.async = true;
            minscript.src = publicUrl + "assets/js/maplace-active.js";
            document.body.appendChild(minscript);
        };

        // Append the Google Maps script to the document body
        document.body.appendChild(mapscript);
    }, []);

    return (
        <div>
            <div className="ltn__google-map-locations-area">
                <div id="gmap" />
            </div>

            <div className="ltn__google-map-locations-list-area mt-115 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__location-search mb-100">
                                <div className="section-title-area ltn__section-title-2">
                                    <h1 className="section-title">Find your nearby location<span>.</span></h1>
                                </div>
                                <form action="#" className="clearfix">
                                    <h3>Your State</h3>
                                    <div className="input-item">
                                        <select className="nice-select">
                                            <option>Make A Selection</option>
                                            <option>New York</option>
                                            <option>South Carolina</option>
                                            <option>Florida</option>
                                            <option>Rhode Island</option>
                                            <option>Melbourne</option>
                                            <option>Sydney</option>
                                            <option>Cairns</option>
                                        </select>
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
