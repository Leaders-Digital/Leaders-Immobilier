import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__video-popup-area ltn__video-popup-margin---">
			  <div className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1" data-bs-bg={publicUrl+"assets/img/agence/kelibia/3.jpg"}>
			    <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/Nae0C_zncxs" data-rel="lightcase:myCollection">
			      <i className="fa fa-play" />
			    </a>
			  </div>
			</div>
        }
}

export default VideoV1