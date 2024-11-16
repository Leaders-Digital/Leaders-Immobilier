import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Sponsor extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1  d-none---">
			  <div className="container">
			  <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h1 className="section-title">Nos Partenaires</h1>
			        </div>
			      </div>
			    <div className="row ltn__brand-logo-active">
			      <div className="col-lg-12">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/brand-logo/1.png"} alt="Brand Logo" />
			        </div>
			      </div>
			      <div className="col-lg-12">
			        <div className="ltn__brand-logo-item" >
			          <img src={publicUrl+"assets/img/brand-logo/2.png"} alt="Brand Logo" />
			        </div>
			      </div>
			      <div className="col-lg-12">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/brand-logo/3.png"} alt="Brand Logo" />
			        </div>
			      </div>
			      <div className="col-lg-12">
			        <div className="ltn__brand-logo-item" style={{width:"65%",marginTop:"25px"}}>
			          <img src={publicUrl+"assets/img/brand-logo/4.png"} alt="Brand Logo" />
			        </div>
			      </div>
				  
				
			    </div>
			  </div>
			</div>
        }
}

export default Sponsor