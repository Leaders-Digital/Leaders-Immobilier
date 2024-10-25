import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <div>
                <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
                    <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="site-logo-wrap">
                                        <div className="site-logo go-top">
                                            <Link to="/"><img src={publicUrl + "assets/img/logo xs.png"} alt="Logo" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col header-menu-column">
                                    <div className="header-menu d-none d-xl-block">
                                        <nav>
                                            <div className="ltn__main-menu go-top">
                                                <ul>
                                                    <li><Link to="/">Accueil</Link></li>
                                                    <li><Link to="/Vente">Vente</Link></li>
                                                    <li><Link to="/location">Location</Link></li>
                                                    <li><Link to="/estimation">Estimation</Link></li>
                                                    <li><Link to="/acheteur">Trouvez Acheteur</Link></li>
                                                    <li><Link to="/exchange">Échange Bien</Link></li>
                                                    <li><Link to="/about">À propos</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                                    {/* User Button */}
                                    <div className="ltn__drop-menu user-menu">
                                        <ul>
                                            <li>
                                                <button className="icon-user" onClick={() => {/* Toggle user menu */}}>
                                                    <i className="icon-user" />
                                                </button>
                                                <ul className="go-top">
                                                    <li><Link to="/login">Sign in</Link></li>
                                                    <li><Link to="/register">Register</Link></li>
                                                    <li><Link to="/my-account">My Account</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

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
                                <Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" /></Link>
                            </div>
                            <button className="ltn__utilize-close">×</button>
                        </div>
                        <div className="ltn__utilize-menu-search-form">
                            <form action={"#"}>
                                <input type="text" placeholder="Search..." />
                                <button><i className="fas fa-search" /></button>
                            </form>
                        </div>
                        <div className="ltn__utilize-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog-grid">News</Link></li>
                                <li><Link to="#">Pages</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        {/* Add other elements like social media links, cart menu, etc. here if needed */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
