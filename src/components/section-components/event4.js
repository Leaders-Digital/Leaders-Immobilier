import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class 	Event4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="neighbour-area section-bg-1 pt-118 pb-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">  <span><i className="far fa-calendar" /></span> Notre événement</h6>
			          <h1 className="section-title">Evènement le grand jeu   <br />
					 By Leaders Immobilier </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__neighbour-tab-wrap">
			          <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			            <div className="nav">
			              <a className="active show" data-bs-toggle="tab" href="#liton_tab_4_1"><img  src={publicUrl+"assets/img/events/milano/1.jpg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_2" ><img  src={publicUrl+"assets/img/events/milano/2.jpg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_3" ><img src={publicUrl+"assets/img/events/milano/3.jpg"} alt="#" /></a>	
			            </div>
			          </div>
			          <div className="tab-content">
			            <div className="tab-pane fade active show" id="liton_tab_4_1">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/events/milano/1.jpg"} alt="#" />
			                    </div>
			                  </div>
			                  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM"><img src={publicUrl+"assets/img/events/milano/4.jpg"} alt="#" /></Link>
			                      
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Lorem Lorem</Link></h4>
			                        <label><span className="ltn__secondary-color">18 Octobre</span> / 2023</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Explorer l'événement   <i className="flaticon-right-arrow" /></Link>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_2">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/events/milano/2.jpg"} alt="#" />
			                    </div>
			                  </div>
							  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM"><img src={publicUrl+"assets/img/events/milano/5.jpg"} alt="#" /></Link>
			                      
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Lorem Lorem</Link></h4>
			                        <label><span className="ltn__secondary-color">18 Octobre</span> / 2023</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Explorer l'événement   <i className="flaticon-right-arrow" /></Link>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_3">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/events/milano/3.jpg"} alt="#" />
			                    </div>
			                  </div>
							  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM"><img src={publicUrl+"assets/img/events/milano/6.jpg"} alt="#" /></Link>
			                      
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Lorem Lorem</Link></h4>
			                        <label><span className="ltn__secondary-color">18 Octobre</span> / 2023</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link target='blank' to="https://www.youtube.com/watch?v=IB9UeHrG2aM">Explorer l'événement   <i className="flaticon-right-arrow" /></Link>
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
        }
}

export default Event4