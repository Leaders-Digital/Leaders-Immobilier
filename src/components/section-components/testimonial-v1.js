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
			          <h1 className="section-title">Avis Des Clients </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						 Vraiment un service professionnel et une réactivité idéal.
						Je tiens à remercie amal et yathreb pour l'accueil chaleureux et OLFA pour son professionnalisme et son assistance....</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.png"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Seifeddine Oueslati</h5>
			                <label>avis google	</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						Merci beaucoup agence Leaders Immobilier l'aouina Je suis tres satisfaite par le service. Une excellente equipe je remercie hasna. Bonne continuation et bravo  encore.

						</p>
			            <div className="ltn__testimoni-info-inner mt-5">
			              <div className="ltn__testimoni-img mt-2">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Sihem Mezni</h5>
			                <label>avis google	</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						Très bon accueil de la part de l'équipe avec un grand professionnalisme. Je conseille vivement cette agence. Un grand bravo pour pour mademoiselle insaf 🥰🥰</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Fatma Bel Hadj Ali</h5>
			                <label>avis google	</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						Je recommande fortement des vrais professionnels un Grand bravo chaima islem et olfa pour le service  et bonne continuation leaders immobilier laouina🤗🤗
						</p>
			            <div className="ltn__testimoni-info-inner mt-5">
			              <div className="ltn__testimoni-img mt-2">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation ">
			                <h5>Ahlem Aousji</h5>
			                <label>avis google							</label>
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