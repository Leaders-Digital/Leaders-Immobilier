import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <div className="ltn__slider-area ltn__slider-11 --- ltn__slider-11-pagination-count-show--- section-bg-1">
                <div className="ltn__slider-11-inner">
                    <div className="ltn__slider-11-active">
                        {/* slide-item - First Slide (Event Awards with Text) */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <div className="slide-video mb-50 d-none">
                                                        <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                            <i className="fa fa-play" />
                                                        </a>
                                                    </div>
                                                    <h6 className="slide-sub-title white-color--- animated">
                                                        <span><i className="far fa-calendar" /></span> Notre événement
                                                    </h6>
                                                    <h4 className="slide-title animated" style={{ fontSize: "50px" }}>
                                                        Festival National Brands <br /> and <span>Influencers Awards</span><br /> Of Tunisia 2023
                                                    </h4>
                                                    <div className="slide-brief animated">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                    </div>
                                                    <div className="btn-wrapper animated">
                                                        <Link to="/about" className="theme-btn-1 btn btn-effect-1">Lorem Lorem</Link>
                                                        <a className="ltn__video-play-btn" style={{ backgroundColor: "#059ad7" }} href="https://www.youtube.com/embed/Vuq9XfAmTCs" data-rel="lightcase">
                                                            <i className="icon-play " style={{ color: "#fff" }} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
												<div className="slide-item-img">
													<img src={publicUrl + "assets/img/events/elu/1.jpg"} alt={imagealt} />
												</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* slide-item - Other Slides (No Text, Only Image) */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-img">
                                                <img src={publicUrl + "assets/img/events/elu/2.jpg"} alt={imagealt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-img">
                                                <img src={publicUrl + "assets/img/events/elu/3.jpg"} alt={imagealt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-img">
                                                <img src={publicUrl + "assets/img/events/elu/5.jpg"} alt={imagealt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slider-4-pagination */}
                    <div className="ltn__slider-11-pagination-count">
                        <span className="count" />
                        <span className="total" />
                    </div>

                    {/* slider-4-img-slide-arrow */}
                    <div className="ltn__slider-11-img-slide-arrow">
                        <div className="ltn__slider-11-img-slide-arrow-inner">
                            <div className="ltn__slider-11-img-slide-arrow-active">
                                <div className="image-slide-item">
                                    <img src={publicUrl + "assets/img/events/elu/1.jpg"} alt="Flower Image" />
                                </div>
                                <div className="image-slide-item">
                                    <img src={publicUrl + "assets/img/events/elu/2.jpg"} alt="Flower Image" />
                                </div>
                                <div className="image-slide-item">
                                    <img src={publicUrl + "assets/img/events/elu/3.jpg"} alt="Flower Image" />
                                </div>
                                <div className="image-slide-item">
                                    <img src={publicUrl + "assets/img/events/elu/5.jpg"} alt="Flower Image" />
                                </div>
                            </div>
                            {/* slider-4-slide-item-count */}
                            <div className="ltn__slider-11-slide-item-count">
                                <span className="count" />
                                <span className="total" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerV2;
