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
						<p> <span className="ltn__first-letter">V</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut   </p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/19.jpg"} alt="image" />
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/21.jpg"} alt="image" />
						</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. </p>
				
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