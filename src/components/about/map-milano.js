import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.202020810112!2d9.227957472720957!3d45.48587644257199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c78692d709b1%3A0xf1d433334709768c!2sLEADERS%20IMMOBILIARE!5e0!3m2!1sen!2stn!4v1731583037059!5m2!1sen!2stn" width="100%" height="90%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map