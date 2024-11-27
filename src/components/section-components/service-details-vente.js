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
						<img src={publicUrl+"assets/img/service/12.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">V</span>Le service de vente de Leaders Immobilier est conçu pour offrir à chaque client une expérience fluide et réussie, qu’il soit vendeur ou acheteur. Notre équipe d’experts immobiliers met à votre disposition une connaissance approfondie du marché, vous assurant ainsi une estimation précise de la valeur de votre bien. Grâce à notre réseau étendu et à notre base de clients diversifiée, nous avons la capacité de cibler les bons acheteurs rapidement et efficacement. Nous accompagnons nos clients tout au long du processus de vente, depuis la mise en valeur du bien jusqu’à la négociation des meilleures conditions de vente.
						</p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/19.jpg"} alt="image" />
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/21.jpg"} alt="image" />
						</div>
						</div>
						<p>Notre approche est centrée sur une communication transparente et une gestion professionnelle de chaque étape. Nous offrons des conseils personnalisés pour vous aider à présenter votre bien sous son meilleur jour, en maximisant son potentiel de vente. De plus, nous nous occupons des aspects administratifs et juridiques, afin de garantir une transaction en toute sérénité.  <br/>
Que vous souhaitiez vendre une maison, un appartement ou un bien commercial, Leaders Immobilier vous aide à concrétiser vos projets en toute confiance. Grâce à notre expertise et à notre engagement, nous nous assurons que chaque vente se déroule de manière fluide et efficace, pour que vous puissiez atteindre vos objectifs immobiliers avec succès.
</p>
				
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li><Link to="/serviceAchat">Service Achat <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li className="active"><Link to="/serviceVente"> Service Vente <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceLocation">Service  Location<span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceConstruction">Service Construction <span><i className="fas fa-arrow-right" /></span></Link></li>
					
						</ul>
						</div>
				
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/11.jpg"} alt="Banner Image" /></Link>
						</div>	
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails