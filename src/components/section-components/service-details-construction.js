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
						<img src={publicUrl+"assets/img/service/2.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">C</span>Proposition 2
Le service de construction de Leaders Immobilier bénéficie d’une collaboration étroite avec Leaders Building, une entité spécialisée dans la gestion de projets de construction. Ensemble, nous vous offrons une approche intégrée, garantissant une exécution parfaite de votre projet, de la conception à la réalisation. Grâce à l’expertise de Leaders Building, nous assurons une gestion optimisée des travaux, un suivi rigoureux du chantier et un respect strict des délais et des normes de qualité.
</p>						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/5.jpg"} alt="image" />
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/3.jpg"} alt="image" />
						</div>
						</div>
						<p>Cette collaboration nous permet de vous proposer des solutions innovantes et personnalisées, adaptées à vos besoins spécifiques, tout en veillant à la maîtrise des coûts et à la conformité des constructions aux réglementations locales. Nous vous accompagnons dans toutes les étapes du projet, de la sélection du terrain à la remise des clés, en passant par la conception architecturale et l'obtention des permis nécessaires. <br/>
Grâce à Leaders Building, nous bénéficions d’un réseau de professionnels qualifiés et de partenaires de confiance, ce qui garantit des résultats à la hauteur de vos attentes. Avec Leaders Immobilier et Leaders Building, votre projet de construction est entre de bonnes mains, pour une réalisation de qualité, dans les meilleurs délais et avec une approche transparente et professionnelle.
 </p>
				
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li><Link to="/serviceAchat">Service Achat <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li ><Link to="/serviceVente"> Service Vente <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/ServiceLocation">Service  Location<span><i className="fas fa-arrow-right" /></span></Link></li>
							<li  className="active"><Link to="/ServiceConstruction">Service Construction <span><i className="fas fa-arrow-right" /></span></Link></li>
					
						</ul>
						</div>
				
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/6.jpg"} alt="Banner Image" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails