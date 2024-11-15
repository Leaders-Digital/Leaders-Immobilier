import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryV3 = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    // Use useNavigate to programmatically navigate
    const navigate = useNavigate();

    // Function to handle category click, which navigates to the right page with the selected typeCategorie
    const handleCategoryClick = (category) => {
        navigate('/vente', { state: { typeCategorie: category } });
    };

    return (
        <div className="ltn__banner-area go-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2--- text-center">
                            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">PROPRIÉTÉS</h6>
                            <h1 className="section-title">EXPLOREZ NOS PROPRIÉTÉS</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div
                            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                            data-bs-bg={publicUrl + 'assets/img/gallery/2.png'}
                            onClick={() => handleCategoryClick('Appartement')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="ltn__banner-info">
                                <h3>Appartements</h3>
                                <p>Offres exceptionnelles disponibles</p>
                                <mark>Offres disponibles</mark>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                            data-bs-bg={publicUrl + 'assets/img/gallery/3.jpg'}
                            onClick={() => handleCategoryClick('Local commercial')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="ltn__banner-info">
                                <h3>Local Commercial</h3>
                                <p>Offres exceptionnelles disponibles</p>
                                <mark>Offres disponibles</mark>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                            data-bs-bg={publicUrl + 'assets/img/gallery/7.jpg'}
                            onClick={() => handleCategoryClick('Terrain constructible')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="ltn__banner-info">
                                <h3>Terrain</h3>
                                <p>Offres exceptionnelles disponibles</p>
                                <mark>Offres disponibles</mark>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                            data-bs-bg={publicUrl + 'assets/img/gallery/8.jpg'}
                            onClick={() => handleCategoryClick('Maison')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="ltn__banner-info">
                                <h3>Maison</h3>
                                <p>Offres exceptionnelles disponibles</p>
                                <mark>Offres disponibles</mark>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                            data-bs-bg={publicUrl + 'assets/img/gallery/9.jpg'}
                            onClick={() => handleCategoryClick('Villa')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="ltn__banner-info">
                                <h3>Villas</h3>
                                <p>Offres exceptionnelles disponibles</p>
                                <mark>Offres disponibles</mark>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryV3;
