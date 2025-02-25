import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Event3 extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <div className="neighbour-area section-bg-1 pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center---">
                                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                                    <span><i className="far fa-calendar" /></span> Notre événement
                                </h6>
                                <h1 className="section-title">Festival National Brands and Influencers<br /> Awards Of Tunisia 2024



                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__neighbour-tab-wrap">
                                <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                                    <div className="nav">
                                        <a className="active show" data-bs-toggle="tab" href="#event_tab_1"><img src={publicUrl + "assets/img/events/newevent/8.jpg"} alt="#" /></a>
                                        <a data-bs-toggle="tab" href="#event_tab_2"><img src={publicUrl + "assets/img/events/newevent/1.jpg"} alt="#" /></a>
                                        <a data-bs-toggle="tab" href="#event_tab_3"><img src={publicUrl + "assets/img/events/newevent/3.jpg"} alt="#" /></a>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="event_tab_1">
                                        <div className="ltn__neighbour-tab-content-inner">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="neighbour-apartments-img">
                                                        <img src={publicUrl + "assets/img/events/newevent/8.jpg"} alt="#" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="ltn__search-by-place-item neighbour-apartments-item">
                                                        <div className="search-by-place-img">
                                                            <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4"><img src={publicUrl + "assets/img/events/newevent/4.jpg"} alt="#" /></Link>
                                                        </div>
                                                        <div className="search-by-place-info go-top">
                                                            <h4><Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Festival National Brands</Link></h4>
                                                            <label><span className="ltn__secondary-color">6 février
															</span> / 2025</label>
                                                            <div className="search-by-place-brief">
                                                                <p>Leaders Immobilier a été élu meilleure agence immobilière en Tunisie lors de la deuxième édition du Festival National Brand and Influencers Awards de Tunisie. </p>
                                                            </div>
                                                            <div className="search-by-place-btn ">
                                                                <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Explorer l'événement   <i className="flaticon-right-arrow" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="event_tab_2">
                                        <div className="ltn__neighbour-tab-content-inner">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="neighbour-apartments-img">
                                                        <img src={publicUrl + "assets/img/events/newevent/1.jpg"} alt="#" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="ltn__search-by-place-item neighbour-apartments-item">
                                                        <div className="search-by-place-img">
                                                            <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4"><img src={publicUrl + "assets/img/events/newevent/5.jpg"} alt="#" /></Link>
                                                        </div>
                                                        <div className="search-by-place-info go-top">
                                                            <h4><Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Festival National Brands</Link></h4>
                                                            <label><span className="ltn__secondary-color">6 février</span> / 2025</label>
                                                            <div className="search-by-place-brief">
                                                                <p>Leaders Immobilier a été élu meilleure agence immobilière en Tunisie lors de la deuxième édition du Festival National Brand and Influencers Awards de Tunisie.</p>
                                                            </div>
                                                            <div className="search-by-place-btn ">
                                                                <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Explorer l'événement<i className="flaticon-right-arrow" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="event_tab_3">
                                        <div className="ltn__neighbour-tab-content-inner">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="neighbour-apartments-img">
                                                        <img src={publicUrl + "assets/img/events/newevent/3.jpg"} alt="#" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="ltn__search-by-place-item neighbour-apartments-item">
                                                        <div className="search-by-place-img">
                                                            <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4"><img src={publicUrl + "assets/img/events/newevent/7.jpg"} alt="#" /></Link>
                                                        </div>
                                                        <div className="search-by-place-info go-top">
                                                            <h4><Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Festival National Brands</Link></h4>
                                                            <label><span className="ltn__secondary-color">6 février</span> / 2025</label>
                                                            <div className="search-by-place-brief">
                                                                <p>Leaders Immobilier a été élu meilleure agence immobilière en Tunisie lors de la deuxième édition du Festival National Brand and Influencers Awards de Tunisie.</p>
                                                            </div>
                                                            <div className="search-by-place-btn ">
                                                                <Link target='blank' to="https://www.youtube.com/watch?v=adnZaTnRFI4">Explorer l'événement   <i className="flaticon-right-arrow" /></Link>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Event3;
