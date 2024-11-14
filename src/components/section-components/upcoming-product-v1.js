import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpcomingProductV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center---">
                                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6>
                                <h1 className="section-title white-color">Dream Living Space <br /> Setting New Standards</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
                        {/* upcoming-project-item */}
                        <div className="col-lg-12">
                            <div className="ltn__upcoming-project-item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
                                            <img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
                                            <img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional upcoming-project-items */}
                        <div className="col-lg-12">
                            <div className="ltn__upcoming-project-item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
										<img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
										<img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__upcoming-project-item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
										<img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltn__upcoming-project-img">
										<img src={publicUrl+"assets/img/events/car2/1.jpg"} alt="Project Image 2" />
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

export default UpcomingProductV1;
