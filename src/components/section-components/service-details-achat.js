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
						<img src={publicUrl+"assets/img/service/7.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">A</span>Le service de vente de Leaders Immobilier se distingue par son approche professionnelle et personnalisée, visant à offrir une expérience fluide et réussie à chaque client. Que vous soyez vendeur ou acheteur, notre équipe met tout en œuvre pour garantir une transaction immobilière optimale. Nous commençons par une évaluation précise de votre bien, basée sur une connaissance approfondie du marché local et des tendances actuelles. Grâce à notre réseau étendu et à une base de clients diversifiée, nous identifions rapidement les acheteurs potentiels pour votre propriété.
						</p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/8.jpg"} alt="image" />
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/10.jpg"} alt="image" />
						</div>
						</div>
						<p>Nous vous accompagnons à chaque étape de la vente, en vous conseillant sur la mise en valeur de votre bien pour attirer les acheteurs, en optimisant sa présentation et en vous proposant des solutions adaptées. Leaders Immobilier prend en charge l’aspect administratif et juridique de la transaction, vous assurant une vente sans tracas. Notre équipe s’occupe de la rédaction des contrats, de la gestion des démarches légales et de la négociation des prix, afin de vous garantir une vente réussie et sereine. <br/>
En outre, nous privilégions la communication transparente, vous tenant informé à chaque étape du processus. Notre objectif est de vous aider à vendre votre bien dans les meilleures conditions possibles, en vous offrant un accompagnement de confiance, efficace et sur mesure. Grâce à Leaders Immobilier, vendre votre bien devient un projet simple et sans stress.
</p>
				
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li  className="active"><Link to="/serviceAchat">Service Achat <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li ><Link to="/serviceVente"> Service Vente <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceLocation">Service  Location<span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceConstruction">Service Construction <span><i className="fas fa-arrow-right" /></span></Link></li>
					
						</ul>
						</div>
				
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/17.jpg"} alt="Banner Image" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails