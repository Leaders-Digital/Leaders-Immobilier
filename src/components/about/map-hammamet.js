import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mt-120 mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.1090336437433!2d10.555542489130238!3d36.40655721853904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd6184065fe851%3A0x4bbf7b849dacc2d4!2sLEADERS%20IMMOBILIER%20HAMMAMET!5e0!3m2!1sen!2stn!4v1731583150330!5m2!1sen!2stn" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map