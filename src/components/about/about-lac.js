import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/others/about.jpg"} alt="About Us Image" />
						<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
						
						</div>
					</div>
					</div>
					<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">À propos de nous						</h6>
						<h1 className="section-title"> Leaders Immobilier Les berges du lac 2<span>.</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus in fermentum orci, quis dapibus ex.</p>
						</div>
						<ul className="ltn__list-item-half clearfix">
						<li>
							<i className="flaticon-home-2" />
							Lorem ipsum dolor
						</li>
						<li>
							<i className="flaticon-mountain" />
							Lorem ipsum dolor
						</li>
						<li>
							<i className="flaticon-heart" />
							Lorem ipsum dolor
						</li>
						<li>
							<i className="flaticon-secure" />
							Lorem ipsum dolor
						</li>
						</ul>
						<div className="ltn__callout bg-overlay-theme-05  mt-30">
						<p>"Enimad minim veniam quis nostrud exercitation <br />
							llamco laboris. Lorem ipsum dolor sit amet" </p>
						</div>
						<div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">NOS PRESTATIONS</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default AboutV4