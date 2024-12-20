import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pb-90 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Équipe</h6>
						<h1 className="section-title">Conseiller immobiliers</h1>
					</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/1.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Kout Elkouloub Ben Romdhane</Link></h4>
						<h6 className="ltn__secondary-color"> Chef d'agence</h6>
						<div className="ltn__social-media">
							<ul>
			
					
							<li>  <a href="tel:+21627246301"><i className="fa fa-phone" />27246301</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/2.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Sabrine Moussi</Link></h4>
						<h6 className="ltn__secondary-color">Agent du bureau
						</h6>
						<div className="ltn__social-media">
							<ul>
						
							<li>  <a href="tel:+21627246302"><i className="fa fa-phone" /> 27246302</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/3.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Ghada Boughanmi</Link></h4>
						<h6 className="ltn__secondary-color">Agent de bureau
						</h6>
						<div className="ltn__social-media">
							<ul>
					
							<li>  <a href="tel:+21627246305 "><i className="fa fa-phone" /> 27246305</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/4.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Wiem amal Ammar</Link></h4>
						<h6 className="ltn__secondary-color">Agent de bureau
						</h6>
						<div className="ltn__social-media">
							<ul>
				
							<li>  <a href="tel:+21627246303"><i className="fa fa-phone" /> 27246303</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/5.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Marwa Nasri </Link></h4>
						<h6 className="ltn__secondary-color">Agent de bureau
						</h6>
						<div className="ltn__social-media">
							<ul>
				
							<li>  <a href="tel:+21627246326"><i className="fa fa-phone" /> 27246326</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>


					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/hammamet/6.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Marame bourannen </Link></h4>
						<h6 className="ltn__secondary-color">Agent de bureau
						</h6>
						<div className="ltn__social-media">
							<ul>
						
							<li>  <a href="tel:+21627246304"><i className="fa fa-phone" /> 27246304</a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>


				</div>
				</div>
			</div>
        }
}

export default TeamV1