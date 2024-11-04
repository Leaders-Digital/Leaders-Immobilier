import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <div className="ltn__contact-address-area mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={publicUrl + "assets/img/icons/10.png"} alt="Email Icon" />
                                </div>
                                <h3>Email</h3>
                                <p>Commencez à travailler avec <br /> Leaders Immobilier</p>
                                <p><a style={{color:"var(--ltn__secondary-color)"}} href="mailto:contact@leaders-immo.com">contact@leaders-immo.com</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={publicUrl + "assets/img/icons/11.png"} alt="Phone Icon" />
                                </div>
                                <h3>Téléphone</h3>
                                <p>Commencez à travailler avec <br /> Leaders Immobilier</p>
                                <p> <a href="tel:+21627246300" style={{color:"var(--ltn__secondary-color)"}}>+216 27 246 300</a></p> 
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src={publicUrl + "assets/img/icons/12.png"} alt="Location Icon" />
                                </div>
                                <h3>Localisation</h3>
                                <p>En face Clinique Hannibal <br /> Lac2, Tunisie.</p>
                                <p>
                                    <a 
									style={{color:"var(--ltn__secondary-color)"}}
                                        href="https://maps.app.goo.gl/wC16R4B2Xh1a8N5c9" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Voir Google Map
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
