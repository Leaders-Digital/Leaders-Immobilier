import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Confidentialité extends Component {

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
                        <p>Chez <span style={{fontWeight:"bold"}}> LEADERS IMMOBILIERS </span>  nous nous engageons à protéger la vie privée de nos utilisateurs. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.</p>

                          
                        </div>
                        </div>
                    </div>
                    {/* card */}
                                  
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                         Données Collectées
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
                        Utilisation des Données
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Les données collectées sont utilisées pour : Fournir et améliorer nos services Communiquer avec vous Personnaliser votre expérience sur notre site Respecter nos obligations légales</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        Partage des Données
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Nous ne vendons, n'échangeons ni ne transférons vos données personnelles à des tiers sans votre consentement, sauf si cela est nécessaire pour fournir nos services ou si la loi l'exige.</p>
                        </div>
                        </div>
                    </div>
                   {/* card */}
                   <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                        Sécurité des Données
                        </h6>
                        <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.</p>
                        </div>
                        </div>
                    </div>

                       {/* card */}
                       <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                        Vos Droits
                        </h6>
                        <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Vous disposez des droits suivants concernant vos données personnelles :</p>

                            <p> <span style={{fontWeight:"bold"}}>Droit d'accès :</span>   Vous pouvez demander une copie des données que nous détenons sur vous.  </p>
                            <p> <span style={{fontWeight:"bold"}}>Droit de rectification : </span> Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes.</p>
                            <p> <span style={{fontWeight:"bold"}}>Droit à l'effacement : </span>  Vous pouvez demander la suppression de vos données dans certaines conditions.  </p>
                            <p> <span style={{fontWeight:"bold"}}>Droit d'opposition : </span>  Vous pouvez vous opposer au traitement de vos données à des fins de marketing direct.
                            Pour exercer ces droits, veuillez nous contacter à  contact@leaders-immo.com.  </p>
                



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

export default Confidentialité