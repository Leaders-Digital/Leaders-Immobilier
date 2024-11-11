import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class EstimationForm extends Component {


    render() {

	let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120">
				<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className=" text-center">
						<h1 className="section-title">Estimer la valeur de votre Bien</h1>
						<p>Lorem ipsum dolor sit amet, consectetur. Proin vehicula <br /> nibh vitae placerat facilisis.</p>

					</div>
					</div>

					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						
						<form id="contact-form" action={publicUrl+"mail.php"} method="post">
						<div className="row">
							<div className="col-md-6">
							<div className="input-item input-item-name ltn__custom-icon">
								<input type="text" name="lastname" placeholder="Entrez votre nom" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-name ltn__custom-icon">
								<input type="text" name="firstname" placeholder="Entrez votre prénom" />
							</div>
							</div>
							
							<div className="col-md-6">
							<div className="input-item input-item-phone ltn__custom-icon">
								<input type="text" name="email" placeholder="Entrez votre numéro" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-email ltn__custom-icon">
								<input type="text" name="phone" placeholder="Entrez votre email" />
							</div>
							</div>

							
							<div className="col-md-6">
  <div className="input-item input-item-phone ltn__custom-icon">
    <select name="propertyType" className="form-control" >
      <option value="">Type de bien</option>
      <option value="Appartement">Appartement</option>
      <option value="villa">Villa</option>
	  <option value="maison">Maison</option>
      <option value="terrain">Terrain</option>
      <option value="bureau">Bureau</option>
      <option value="etage">Etage de villa</option>
      <option value="etage">Local commercial</option>

    </select>
  </div>
</div>



<div className="col-md-6">
  <div className="input-item input-item-phone ltn__custom-icon">
    <select name="propertyType" className="form-control">
      <option value="">Categorie de bien</option>
      <option value="location">Location</option>
      <option value="vente">Vente</option>
    </select>
  </div>
</div>

<div className="col-md-6">
  <div className="input-item input-item-phone ltn__custom-icon">
    <select name="propertyCity" className="form-control">
      <option value="">Sélectionner une ville</option>
      <option value="ariana">Ariana</option>
      <option value="beja">Béja</option>
      <option value="ben-arous">Ben Arous</option>
      <option value="bizerte">Bizerte</option>
      <option value="gabes">Gabès</option>
      <option value="gafsa">Gafsa</option>
      <option value="jendouba">Jendouba</option>
      <option value="kairouan">Kairouan</option>
      <option value="kasserine">Kasserine</option>
      <option value="kebili">Kébili</option>
      <option value="le-kef">Le Kef</option>
      <option value="mahdia">Mahdia</option>
      <option value="manouba">Manouba</option>
      <option value="medenine">Médenine</option>
      <option value="monastir">Monastir</option> 
      <option value="nabeul">Nabeul</option>
      <option value="sfax">Sfax</option>
      <option value="sidi-bouzid">Sidi Bouzid</option>
      <option value="siliana">Siliana</option>
      <option value="sousse">Sousse</option>
      <option value="tataouine">Tataouine</option>
      <option value="tozeur">Tozeur</option>
      <option value="tunis">Tunis</option>
      <option value="zaghouan">Zaghouan</option>
    </select>
  </div>
</div>

<div className="col-md-6">
  <div className="input-item input-item-phone ltn__custom-icon">
    <select name="propertyType" className="form-control">
      <option value="">Délégation</option>
   
    </select>
  </div>
</div>


							
<div className="col-md-12">
  <div className="input-item input-item-phone ltn__custom-icon ">
    <select name="propertyType" className="form-control" 	>
	<option value="">Agence le plus proche </option>
      <option value="lac">Agence Lac2 </option>
      <option value="borj-cedria">Agence Borj Cedria</option>
      <option value="mrezga">Agence El Mrezga </option>
      <option value="hammamet">Agence Hammamet </option>
   
    </select>
  </div>
</div>

							
						</div>
						<div className="input-item input-item-textarea ltn__custom-icon">
							<textarea name="message" placeholder="Entrez Votre Message" defaultValue={""} />
						</div>
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Envoyer</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default EstimationForm	