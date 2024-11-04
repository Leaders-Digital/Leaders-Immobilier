import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm extends Component {

	componentDidMount() {

    	const $ = window.$;
    	
       	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-messege');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
    }

    render() {

	let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Contactez Nous</h4>
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
							<div className="input-item input-item-email ltn__custom-icon">
								<input type="email" name="email" placeholder="Entrez l'adresse e-mail" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-phone ltn__custom-icon">
								<input type="text" name="phone" placeholder="Téléphone" />
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

export default ContactForm