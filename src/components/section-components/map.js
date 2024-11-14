import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<   iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.884743325253!2d10.283321094930583!3d36.845236296195075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4badf1c8d0bd%3A0xd5909ee45877f3c1!2sLEADERS%20IMMOBILIER!5e0!3m2!1sen!2stn!4v1730717268034!5m2!1sen!2stn" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map