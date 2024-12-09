import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
							  <img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" style={{ width: "100px", height: "auto" }} />
				              </div>
				            </div>
				            <p>Fort de son expertise, Leaders Immobilier vous accompagne pour garantir le succès de votre projet immobilier.</p>
				           
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Entreprise</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/Accueil">Accueil</Link></li>
				                <li><Link to="/agence">À propos</Link></li>
								<li><a href="/map">Carte De Prix</a> </li>
								
								<li><Link to="/Contact">Contactez Nous</Link></li>
				               
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Services</h4>
				            <div className="footer-menu go-top">
				              <ul>    
								<li><Link to="/Vente">Vente</Link></li>
				                <li><Link to="/louer">Location</Link></li>
							
								<li><Link to="/Estimation">Estimation</Link></li>
								<li><Link to="/Acheteur">Trouvez Acheteur</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Contact</h4>
							<div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>En face Clinique Hannibal <br/> Lac2, Tunisie</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+216 27246300">(+216) 27 246 300</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="contact@leaders-immo.com">contact@leaders-immo.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Abonnez-vous à notre newsletter hebdomadaire et recevez mises à jour par e-mail.</p>
				            <div className="footer-newsletter">
				              <form action="#">
				                <input type="email"  className='newsletter' name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="news btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				         
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1