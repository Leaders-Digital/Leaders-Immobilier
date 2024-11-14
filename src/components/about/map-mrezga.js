import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.8149513019093!2d10.647834976391865!3d36.41367218939185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029f6c2831f985%3A0x89ef2df04173d846!2sLEADERS%20IMMOBILIER%20Mrezga!5e0!3m2!1sen!2stn!4v1731582736017!5m2!1sen!2stn" width="100%" height="90%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map