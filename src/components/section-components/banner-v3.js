import React from 'react';
import { Link } from 'react-router-dom';

const BannerV3 = () => {
    const slides = [
        {
            image: 'assets/img/slider/11.jpg',
            title: 'وين ما تمشي',
            description: 'Nos agents vous feront visiter les biens et suivront votre dossier pour saisir les meilleures opportunités.',
        },
        {
            image: 'assets/img/slider/12.jpg',
            title: 'وين ما تمشي',
            description: 'Nos agents vous feront visiter les biens et suivront votre dossier pour saisir les meilleures opportunités.',
        },
        {
            image: 'assets/img/slider/13.jpg',
            title: 'وين ما تمشي',
            description: 'Nos agents vous feront visiter les biens et suivront votre dossier pour saisir les meilleures opportunités.',
        }
    ];

    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
        <div className="ltn__slider-area ltn__slider-3 section-bg-2" style={{ height: '90vh' }}>
            <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
                        data-bs-bg={publicUrl + slide.image}
                        style={{ height: '90vh' }}
                    >
                        <div className="ltn__slide-item-inner text-center" style={{ height: '100%' }}>
                            <div className="container" >
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-lg-12 align-self-center" style={{ height: '100%' }}>
                                        <div className="slide-item-info" style={{ height: '100%' }}>
                                            <div className="slide-item-info-inner ltn__slide-animation" style={{ height: '100%' }}>
                                                <h6 className="slide-sub-title white-color--- animated" style={{ fontSize: "1.5rem", marginTop: "100px" }}>
                                                    <span><i className="fas fa-home" /></span> Agence Immobilière
                                                </h6>
                                                <h1 className="slide-title animated" style={{ fontSize: "7rem" }}>
                                                    {slide.title} <span style={{ color: "--ltn__secondary-color" }}>تلقانا</span> معاك
                                                </h1>
                                                <div className="animated">
                                                    <p style={{ fontSize: "1.2rem" }}>
                                                        {slide.description}
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper animated go-top">
                                                    <Link to="/vente" style={{ padding: '12px 20px' }} className="theme-btn-1 btn btn-effect-1">
                                                        Trouver un bien
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerV3;
