import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className=" ">
			    <div className="row">
			      <div className="col-lg-12" >
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Nos prestations</h6>
			          <h1 className="section-title">Notre Objectif Principal</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top " style={{margin:"0px 200px"}}>
			      <div className="col-xl-3 col-md-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/3.png"} style={{width:"80px"}} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">ACHAT</Link></h3>
			            <p>Nous cherchons et dénichons pour vous le bien immobilier le plus conforme à vos besoins dans les meuilleurs délais.</p>
			            <Link className="ltn__service-btn" to="/vente">Acheter une maison <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-md-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/2.png"} style={{width:"80px"}} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">VENTE</Link></h3>
			            <p>Nous nous tenons à vos cotés jusqu'à la concrétisation de l'acte de vente de votre bien immobilier.</p>
			            <Link className="ltn__service-btn" to="/acheteur">Vendre une maison <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-md-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/1.png"} style={{width:"80px"}} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">LOCATION</Link></h3>
			            <p>Nos agents immobiliers mettent tout en oeuvre pour trouver le bon locataire ou la location qui vous convient.</p>
			            <Link className="ltn__service-btn" to="/louer">Louer une maison <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
				  <div className="col-xl-3 col-md-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/4.png"} style={{width:"80px"}} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Construction
						</Link></h3>
			            <p>Nous proposons une panoplie complète de propriétés en location de courte durée pour tous les budgets.</p>
			            <Link className="ltn__service-btn" to="#">Construire une maison<i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1