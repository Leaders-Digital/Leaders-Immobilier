import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Register extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__login-area pb-110">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area text-center">
						<h1 className="section-title">Créer Un Compte</h1>
						<p>Accédez à un large choix de biens immobiliers. Trouvez la propriété <br /> de vos rêves en toute simplicité.</p>
					</div>
					</div>
				</div>
				<div className="row container">
    <div className="container">
        <div className="account-login-inner">
            <form action="#" className="ltn__form-box contact-form-box">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" name="firstname" placeholder="Nom" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="lastname" placeholder="Prénom" className="form-control" />
                    </div>
                </div>
                <input type="text" name="email" placeholder="Votre Email*" className="form-control" />
				<div className="row">
				<div className="col-md-6">
                <input type="password" name="password" placeholder="Mot de passe *" className="form-control" />
				</div>
				<div className="col-md-6">
                <input type="password" name="confirmpassword" placeholder="Confirmer Mot de passe *" className="form-control" />
				</div>
				</div>


				<div className="row">
				<div className="col-md-6">
                <input type="text" name="telephone" placeholder="Téléphone  *" className="form-control" />
				</div>
				<div className="col-md-6">
                <input type="text" name="cin" placeholder="CIN *" className="form-control" />
				</div>
				</div>




                <div className="btn-wrapper">
                    <button className="theme-btn-1 btn reverse-color btn-block" type="submit">Créer Un Compte</button>
                </div>
            </form>
                <div className="go-to-btn go-top text-center">
                    <Link to="/login">VOUS AVEZ DÉJÀ UN COMPTE ?</Link>
                </div>
        </div>
    </div>
</div>
</div>

			</div>
        }
}

export default Register