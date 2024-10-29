import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pb-70 pt-115" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">	
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Notre témoignage</h6>
			          <h1 className="section-title">Commentaires Des Clients </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.png"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>agents de vente</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.png"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Kelian Anderson</h5>
			                <label>agents de vente</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/3.png"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Adam Joseph</h5>
			                <label>agents de vente</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.png"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>James Carter</h5>
			                <label>agents de vente</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial