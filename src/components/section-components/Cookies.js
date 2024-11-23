import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Cookies extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        window.scrollTo(0, 0);

    return <div className="ltn__faq-area mb-100">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="ltn__faq-inner ltn__faq-inner-2">
                    <div id="accordion_2">
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="true">
                        Introduction
                        </h6>
                        <div id="faq-item-2-1" className="collapse show" data-bs-parent="#accordion_2">
                        <div className="card-body">
                        <p>Cette Politique de Cookies explique comment <span style={{fontWeight:"bold"}}> LEADERS IMMOBILIERS </span>   utilise les cookies et technologies similaires pour reconnaître les utilisateurs sur notre site web.</p>

                          
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
                        Qu'est-ce qu'un Cookie ?
                        </h6>
                        <div id="faq-item-2-2" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                
                        <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies aident à améliorer votre expérience en mémorisant vos préférences et actions.</p>

                        
                                             </div>
                        </div>
                    </div>                          
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        Types de Cookies Utilisés
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                        <p> <span style={{fontWeight:"bold"}}>Cookies strictement nécessaires :</span>   Essentiels au fonctionnement du site.  </p>
                            <p> <span style={{fontWeight:"bold"}}>Cookies de performance : </span> Collectent des données anonymes pour améliorer les performances du site. </p>
                            <p> <span style={{fontWeight:"bold"}}>Cookies de ciblage/publicité :</span>  Permettent d’afficher des publicités adaptées à vos intérêts.  </p>
                
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        Gestion des Cookies
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous alerter lorsqu'un cookie est envoyé. Veuillez noter que la désactivation des cookies peut affecter le fonctionnement de certaines fonctionnalités du site.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        Consentement
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>En utilisant notre site, vous consentez à l'utilisation des cookies décrits dans cette Politique. Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur ou en utilisant notre outil de gestion des cookies.</p>
                        </div>
                        </div>
                    </div>
                
                    </div>
                    <div className="need-support text-center mt-100">
                    <h2>Besoin d'aide ? Contactez notre support 24/7  </h2>
                    <div className="btn-wrapper mb-30 go-top">
                        <Link to="/contact" className="theme-btn-1 btn">
                        Contactez Nous  </Link>
                    </div>
                    <h3><i className="fas fa-phone" />  27 246 300</h3>
                    </div>
                </div>  
                </div>
                <div className="col-lg-4">
                
                </div>
            </div>
            </div>
        </div>
  
        }
}

export default Cookies