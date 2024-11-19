import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Login extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<div>
			 <div className="ltn__login-area pb-65">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 contact-form-box">
					<div className="section-title-area text-center">
						<h1 className="section-title">Se Connecter	</h1>
						<p>Accédez à un large choix de biens immobiliers. Trouvez la propriété <br /> de vos rêves en toute simplicité.</p>
					</div>
					</div>
				</div>
				<div className="row">
				<div className="col-lg-6">
  <div className="account-login-inner login-form-border">
    <form method="GET" className="ltn__form-box contact-form-box">
      <input type="password" name="password" placeholder="Mot de passe *" />
      <input type="text" name="number" placeholder="Votre CIN *" />
      <div className="btn-wrapper mt-0">
        <button className="btn theme-btn-1 btn-effect-1" type="submit">Se Connecter</button>
      </div>
      <div className="go-to-btn mt-20">
        <a href="#" title="Mot de passe oublié" data-bs-toggle="modal" data-bs-target="#ltn_forget_password_modal"><small>Mot de passe oublié ?</small></a>
      </div>
    </form>
  </div>
</div>

<div className="col-lg-6">
  <div className="account-create text-center pt-50 register-border">
    <h4>Vous n'avez pas de compte ?</h4>
    <p>Inscrivez-vous dès aujourd'hui pour bénéficier d'un accès exclusif aux <br /> meilleures offres immobilières.</p>
    <div className="btn-wrapper go-top">
      <Link to="/register" className="btn theme-btn-1 btn-effect-1">Créer un compte</Link>
    </div>
  </div>
</div>

				</div>
				</div>
						</div>
			<div className="ltn__modal-area ltn__add-to-cart-modal-area----">
			<div className="modal fade" id="ltn_forget_password_modal" tabIndex={-1}>
				<div className="modal-dialog modal-md" role="document">
				<div className="modal-content">
					<div className="modal-header">
					<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
					</div>
					<div className="modal-body">
					<div className="ltn__quick-view-modal-inner">
						<div className="modal-product-item">
						<div className="row">
							<div className="col-12">
							<div className="modal-product-info text-center">
								<h4>Mot de passe oublié</h4>
								<p className="added-cart"> Entrez l'e-mail de votre inscription.</p>
								<form action="#" className="ltn__form-box">
								<input type="text" name="email" placeholder="Entrez l'e-mail de votre inscription.*" />
								<div className="btn-wrapper mt-0">
									<button className="theme-btn-1 btn btn-full-width-2" type="submit">Envoyer</button>
								</div>
								</form>
							</div>
							{/* additional-info */}
					
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>

			</div>
        }
}

export default Login