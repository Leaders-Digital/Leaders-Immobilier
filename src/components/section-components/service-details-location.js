import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__page-details-area ltn__service-details-area mb-105">
				<div className="container">
				<div className="row">
					<div className="col-lg-8">
					<div className="ltn__page-details-inner ltn__service-details-inner">
						<div className="ltn__blog-img">
						<img src={publicUrl+"assets/img/service/9.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">L</span>Le service de location de Leaders Immobilier offre un accompagnement complet et sur mesure pour tous vos besoins en matière de location immobilière. Que vous soyez propriétaire cherchant à louer votre bien ou locataire en quête de la propriété idéale, notre équipe d'experts est là pour faciliter chaque étape de la transaction. Grâce à une connaissance approfondie du marché local et une analyse précise des tendances de location, nous vous aidons à fixer un prix compétitif et attractif pour votre bien ou à trouver une location qui correspond parfaitement à vos attentes.</p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/22.jpg"} alt="image" />
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/14.jpg"} alt="image" />
						</div>
						</div>
						<p>Pour les propriétaires, nous nous chargeons de la gestion de la mise en location, en veillant à présenter votre bien sous son meilleur jour. Nous gérons également la recherche de locataires sérieux et qualifiés, effectuons les visites, et assurons la rédaction des contrats de location en conformité avec la législation en vigueur. Notre équipe veille à ce que toutes les démarches administratives soient respectées, pour vous garantir une transaction sécurisée et sereine. <br/>
Pour les locataires, nous vous accompagnons dans la recherche du bien qui répond à vos critères, en vous offrant un large choix de propriétés disponibles. Notre objectif est de vous fournir un service personnalisé et rapide, pour que vous trouviez la location idéale en toute confiance. Grâce à Leaders Immobilier, la location devient un processus simple, transparent et efficace.
</p>
				
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li ><Link to="/serviceAchat">Service Achat <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/serviceVente"> Service Vente <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li  className="active"><Link to="/ServiceLocation">Service  Location<span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceConstruction">Service Construction <span><i className="fas fa-arrow-right" /></span></Link></li>
					
						</ul>
						</div>
				
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/23.jpg"} alt="Banner Image" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails