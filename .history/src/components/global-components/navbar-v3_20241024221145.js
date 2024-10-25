import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
			  <div className="ltn__header-top-area top-area-color-white">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-7">
			          <div className="ltn__top-bar-menu">
			            <ul>
			              <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
			              <li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-md-5">
			          <div className="top-bar-right text-end">
			            <div className="ltn__top-bar-menu">
			              <ul>
			                <li>
			                  {/* ltn__language-menu */}
			                  <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
			                    <ul>
			                      <li><Link to="#" className="dropdown-toggle"><span className="active-currency">English</span></Link>
			                        <ul>
			                          <li><Link to="#">Arabic</Link></li>
			                          <li><Link to="#">Bengali</Link></li>
			                          <li><Link to="#">Chinese</Link></li>
			                          
			                          <li><Link to="#">French</Link></li>
			                          <li><Link to="#">Hindi</Link></li>
			                        </ul>
			                      </li>
			                    </ul>
			                  </div>
			                </li>
			                <li>
							<Social />
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
			    <div className="container">
			      <div className="row">
			        <div className="col">
			          <div className="site-logo-wrap">
			            <div className="site-logo go-top">
			              <Link to="/"><img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" /></Link>
			            </div>
			            <div className="get-support clearfix d-none">
			              <div className="get-support-icon">
			                <i className="icon-call" />
			              </div>
			              <div className="get-support-info">
			                <h6>Get Support</h6>
			                <h4><a href="tel:+123456789">123-456-789-10</a></h4>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col header-menu-column menu-color-white">
			          <div className="header-menu d-none d-xl-block go-top">
			            <nav>
			              <div className="ltn__main-menu">
			                <ul>
			                  <li><a href="#">Accueil</a> </li>
			                  <li><a href="#">Vente</a> </li>
			                  <li><a href="#">Location</a> </li>
			                  <li><a href="#">Estimation</a> </li>
			                  <li><a href="#">Trouvez Acheteur</a> </li>
			                  <li><a href="#">Échange Bien</a> </li>
			                  <li><a href="#">À propos</a> </li>
			                  <li><a href="#">Contactez Nous</a> </li>
			                  <li><a href="#">Contactez Nous</a> </li>

			                  <li className="special-link">
			                    <Link to="/add-listing">Espace Membre</Link>
			                  </li>
			                </ul>
			              </div>
			            </nav>
			          </div>
			        </div>
			        <div className="col--- ltn__header-options ltn__header-options-2 ">
			          {/* Mobile Menu Button */}
			        
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>
				</div>
		</div>
        )
    }
}


export default NavbarV3