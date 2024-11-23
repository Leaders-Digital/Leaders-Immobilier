import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Mentions extends Component {

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
                        Informations Générale
                        </h6>
                        <div id="faq-item-2-1" className="collapse show" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p> <span style={{fontWeight:"bold"}}>Nom de la société :</span>  Leaders Immobiliers  </p>
                            <p> <span style={{fontWeight:"bold"}}>Adresse du siège social :</span> Cité des Pins, Les berges du lac 2 1053 Tunis, Tunisie  </p>
                            <p> <span style={{fontWeight:"bold"}}>Téléphone :</span>  (+216) 27 246 300  </p>
                            <p> <span style={{fontWeight:"bold"}}>Adresse e-mail  :</span>   contact@leaders-immo.com  </p>
                          
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
                        Hébergeur du Site
                        </h6>
                        <div id="faq-item-2-2" className="collapse " data-bs-parent="#accordion_2">
                        <div className="card-body">
                
                        <p> <span style={{fontWeight:"bold"}}>Informations personnelles : </span>   Nom, prénom, adresse, numéro de téléphone, adresse e-mail, etc.  </p>   
                        <p> <span style={{fontWeight:"bold"}}>Informations techniques :</span>  Adresse IP, type de navigateur, pages visitées, etc.  </p>   
                        <p> <span style={{fontWeight:"bold"}}>Données de navigation : </span>  Informations sur la façon dont vous utilisez notre site. </p>   
                        
                                             </div>
                        </div>
                    </div>                          
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        Propriété Intellectuelle
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Le contenu de ce site (textes, images, logos, etc.) est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        Responsabilité
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>LEADERS IMMOBILIERS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Cependant, la société ne peut garantir l'exactitude, la complétude ou l'actualité des informations fournies. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        Données Personnelles
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre <Link style={{color:"#059ad7"}} to="/Politique"> Politique de confidentialité.</Link></p>
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

export default Mentions