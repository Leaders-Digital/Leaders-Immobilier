import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

const NavbarV3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const publicUrl = process.env.PUBLIC_URL + '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
        {/* Header Top Area */}
        <div className="ltn__header-top-area top-area-color-white">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:contact@leaders-immo.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" /> contact@leaders-immo.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+21627246300">
                        <i className="icon-call" />
                        (+216) 27 246 300
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
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
        {/* Header Middle Area */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
          <div className="row">
            <div className="col">
              <div className="site-logo-wrap">
                <div className="site-logo-home go-top col ml-5">
                  <Link to="/">
                    <img src={`${publicUrl}assets/img/logo-2.png`} alt="Logo" className="logo-home" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col header-menu-column menu-color-white">
              <div className="header-menu d-none d-xl-block go-top">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li><a href="/">Accueil</a></li>
                      <li><a href="/vente">Vente</a></li>
                      <li><a href="/louer">Location</a></li>
                      <li><a href="/estimation">Estimation</a></li>
                      <li><a href="/acheteur">Trouvez Acheteur</a></li>
                      <li><a href="/map">Carte De Prix</a></li>
                      <li>
                        <Link style={{ pointerEvents: 'none' }}>À propos</Link>
                        <ul>
                          <li><Link to="/events">Événements</Link></li>
                          <li><Link to="/agence">Nos Agences</Link></li>
                          <li><Link to="/histoires">Histoires</Link></li>
                        </ul>
                      </li>
                      <li><a href="/contact">Contactez Nous</a></li>
                      <li className="espa btn-wrapper">
                        <Link className="theme-btn-2 btn btn-effect-1" to="/login">Espace Membre</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col--- ltn__header-options ltn__header-options-2">
              {/* Mobile Menu Button */}
              <div className="mobile-menu-toggle d-block d-xl-none container" style={{ marginTop: '25px' }}>
                <a
                  href="#ltn__utilize-mobile-menu"
                  className={isMenuOpen ? 'ltn__utilize-close' : 'ltn__utilize-toggle'}
                  onClick={toggleMenu}
                >
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    />
                    <path d="M300,320 L540,320" id="middle" />
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={`${publicUrl}assets/img/logo.png`} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close" onClick={toggleMenu}>×</button>
          </div>
          {/* Menu Links */}
          <div className="ltn__utilize-menu">
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/vente">Vente</a></li>
              <li><a href="/louer">Location</a></li>
              <li><a href="/estimation">Estimation</a></li>
              <li><a href="/acheteur">Trouvez Acheteur</a></li>
              <li><a href="/map">Carte De Prix</a></li>
              <li>
                <Link style={{ pointerEvents: 'none' }}>À propos</Link>
                <ul>
                  <li><Link to="/events">Événements</Link></li>
                  <li><Link to="/agence">Nos Agences</Link></li>
                  <li><Link to="/histoires">Histoires</Link></li>
                </ul>
              </li>
              <li><a href="/contact">Contactez Nous</a></li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li><a href="https://www.facebook.com/leadersimmobilier/?locale=fr_FR" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
              <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarV3;
