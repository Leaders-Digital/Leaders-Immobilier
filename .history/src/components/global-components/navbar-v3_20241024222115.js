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
						<Link to="/"><img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" style={{ height: '80px',  }} /></Link>			            </div>
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
			          <div className="mobile-menu-toggle d-xl-none">
			            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
			              <svg viewBox="0 0 800 600">
			                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
			                <path d="M300,320 L540,320" id="middle" />
			                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
			              </svg>
			            </a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>
			<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
				
					<div className="ltn__utilize-menu">
					<ul>
					<li><a href="#">Accueil</a> </li>
			                  <li><a href="#">Vente</a> </li>
			                  <li><a href="#">Location</a> </li>
			                  <li><a href="#">Estimation</a> </li>
			                  <li><a href="#">Trouvez Acheteur</a> </li>
			                  <li><a href="#">Échange Bien</a> </li>
			                  <li><a href="#">À propos</a> </li>
			                  <li><a href="#">Contactez Nous</a> </li>
						
				
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