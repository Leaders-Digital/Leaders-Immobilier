import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 ">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/agence/lac/1.jpeg"}  alt="About Us Image" />
					
					</div>
					</div>
					<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">À propos de nous						</h6>
						<h1 className="section-title"> Leaders Immobilier Aouina<span>.</span></h1>
						<p>Notre agence à Aouina, située dans la capitale, couvre la région de Tunis et ses environs. Nous vous offrons des services de vente, location et estimation de biens immobiliers, ainsi que des conseils personnalisés pour vous accompagner dans tous vos projets immobiliers à Tunis.</p>
						</div>
						<img src={publicUrl+"assets/img/agence/lac/2.jpeg"}  alt="About Us Image" />

					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default AboutV4