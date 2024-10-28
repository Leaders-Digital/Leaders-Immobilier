import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/';
        let imagealt = 'image';

        return (
            <div className="ltn__slider-area ltn__slider-3 section-bg-2 " style={{ height: '90vh' }}>
                <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
                    {/* ltn__slide-item */}
                    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/11.jpg"} style={{ height: '90vh' }}>
                        <div className="ltn__slide-item-inner text-center" style={{ height: '100%' }}>
                            <div className="container" style={{ height: '100%' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-lg-12 align-self-center" style={{ height: '100%' }}>
                                        <div className="slide-item-info" style={{ height: '100%' }}>
                                            <div className="slide-item-info-inner ltn__slide-animation" style={{ height: '100%' }}>
                                                <div className="slide-video mb-50 d-none">
                                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                        <i className="fa fa-play" />
                                                    </a>
                                                </div>
                                                <h6 className="slide-sub-title white-color--- animated" style={{ fontSize: "1.5rem",marginTop:"100px" }}>
                                                    <span><i className="fas fa-home" /></span> Agence Immobilière
                                                </h6>
                                                <h1 className="slide-title animated" style={{ fontSize: "7rem" }}>
                                                    وين ما تمشي <span style={{ color: "--ltn__secondary-color" }}>تلقانا</span> معاك
                                                </h1>
                                                <div className="animated">
                                                    <p style={{ fontSize: "1.2rem" }}>
                                                        Nos agents vous feront visiter les biens et suivront votre dossier pour <br /> saisir les meilleures opportunités.
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper animated go-top">
                                                    <Link to="/shop" style={{ padding: '12px 20px' }} className="theme-btn-1 btn btn-effect-1">
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
                    {/* ltn__slide-item */}
                    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/12.jpg"} style={{ height: '90vh' }}>
                        <div className="ltn__slide-item-inner text-center" style={{ height: '100%' }}>
                            <div className="container" style={{ height: '100%' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-lg-12 align-self-center" style={{ height: '100%' }}>
                                        <div className="slide-item-info" style={{ height: '100%' }}>
                                            <div className="slide-item-info-inner ltn__slide-animation" style={{ height: '100%' }}>
                                                <div className="slide-video mb-50 d-none">
                                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                        <i className="fa fa-play" />
                                                    </a>
                                                </div>
                                                <h6 className="slide-sub-title white-color--- animated" style={{ fontSize: "1.5rem",marginTop:"100px" }}>
                                                    <span><i className="fas fa-home" /></span> Agence Immobilière
                                                </h6>
                                                <h1 className="slide-title animated" style={{ fontSize: "7rem" }}>
                                                    وين ما تمشي <span style={{ color: "--ltn__secondary-color" }}>تلقانا</span> معاك
                                                </h1>
                                                <div className="animated">
                                                    <p style={{ fontSize: "1.2rem" }}>
                                                        Nos agents vous feront visiter les biens et suivront votre dossier pour <br /> saisir les meilleures opportunités.
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper animated go-top">
                                                    <Link to="/shop" style={{ padding: '12px 20px' }} className="theme-btn-1 btn btn-effect-1">
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
                    {/* ltn__slide-item */}
                    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/13.jpg"} style={{ height: '90vh' }}>
                        <div className="ltn__slide-item-inner text-center" style={{ height: '100%' }}>
                            <div className="container" style={{ height: '100%' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-lg-12 align-self-center" style={{ height: '100%' }}>
                                        <div className="slide-item-info" style={{ height: '100%' }}>
                                            <div className="slide-item-info-inner ltn__slide-animation" style={{ height: '100%' }}>
                                                <div className="slide-video mb-50 d-none">
                                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                        <i className="fa fa-play" />
                                                    </a>
                                                </div>
                                                <h6 className="slide-sub-title white-color--- animated" style={{ fontSize: "1.5rem",marginTop:"100px" }}>
                                                    <span><i className="fas fa-home" /></span> Agence Immobilière
                                                </h6>
                                                <h1 className="slide-title animated" style={{ fontSize: "7rem" }}>
                                                    وين ما تمشي <span style={{ color: "--ltn__secondary-color" }}>تلقانا</span> معاك
                                                </h1>
                                                <div className="animated">
                                                    <p style={{ fontSize: "1.2rem" }}>
                                                        Nos agents vous feront visiter les biens et suivront votre dossier pour <br /> saisir les meilleures opportunités.
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper animated go-top">
                                                    <Link to="/shop" style={{ padding: '12px 20px' }} className="theme-btn-1 btn btn-effect-1">
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
                </div>
            </div>
        )
    }
}

export default BannerV3;
