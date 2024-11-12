import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RechercheBien = () => {
    const [typeBien, setTypeBien] = useState('');
    const [ville, setVille] = useState('');
    const [chambres, setChambres] = useState('');
    const [surfaceMin, setSurfaceMin] = useState('');
    const [surfaceMax, setSurfaceMax] = useState('');
    const [price, setPrice] = useState('');

    const handleTypeChange = (e) => setTypeBien(e.target.value);
    const handleVilleChange = (e) => setVille(e.target.value);
    const handleChambresChange = (e) => setChambres(e.target.value);
    const handleSurfaceMinChange = (e) => setSurfaceMin(e.target.value);
    const handleSurfaceMaxChange = (e) => setSurfaceMax(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);

    return (
        
        <div className="tab-content">
            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                <div className="car-dealer-form-inner">
                    <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-building col-lg-4 col-md-6">
                            <select className="nice-select" value={typeBien} onChange={handleTypeChange}>
                                <option value="">Type de bien</option>
                                <option value="Appartement">Appartement</option>
                                <option value="Villa">Villa</option>
                                <option value="Maison">Maison</option>
                                <option value="Terrain">Terrain</option>
                                <option value="Bureau">Bureau</option>
                                <option value="Etage de villa">Etage de villa</option>
                                <option value="Local commercial">Local commercial</option>
                            </select>
                        </div>

                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-city col-lg-4 col-md-6">
                            <select className="nice-select" value={ville} onChange={handleVilleChange}>
                                <option value="">Ville</option>
                                <option value="ariana">Ariana</option>
                                <option value="beja">Béja</option>
                                <option value="tunis">Tunis</option>
                                {/* Add other cities here */}
                            </select>
                        </div>

                        

                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-bed col-lg-4 col-md-6">
                            <select className="nice-select" value={chambres} onChange={handleChambresChange}>
                                <option value="">Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-mark col-lg-4 col-md-6">
										<select className="nice-select">			
                            <option value="">Délégation</option>
                            <option value="La Marsa">La Marsa</option>
                            <option value="HAMMAMET">Hammamet</option>
                            <option value="HAMMAMET CENTRE">Hammamet Centre</option>
                            <option value="MREZGA">Mrezga</option>
                            <option value="ARIANA VILLE">Ariana Ville</option>
                            <option value="La Soukra">La Soukra</option>
                            <option value="Le Kram">Le Kram</option>
                            <option value="Nabeul">Nabeul</option>
                            <option value="Lac 1">Lac 1</option>
                            <option value="Lac 2">Lac 2</option>
                        </select>
										</div> 

                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                            <input type="number" name="surfaceMin" value={surfaceMin} onChange={handleSurfaceMinChange} placeholder="Surface Min" />
                        </div>

                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                            <input type="number" name="surfaceMax" value={surfaceMax} onChange={handleSurfaceMaxChange} placeholder="Surface Max" />
                        </div>

                    

                        <div className="btn-wrapper text-center go-top">
                            <Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RechercheBien;
