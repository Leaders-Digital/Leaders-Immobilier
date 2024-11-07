import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a href="https://www.facebook.com/leadersimmobilier/?locale=fr_FR" target='blank' title="Facebook"><i className="fab fa-facebook-f" /></a></li>
				<li><a href="#" target='blank' title="Twitter"><i className="fab fa-twitter" /></a></li>
				<li><a href="https://www.instagram.com/leaders__immobilier/" target='blank' title="Instagram"><i className="fab fa-instagram" /></a></li>
				<li><a href="https://www.youtube.com/channel/UCvog0rk6k2ucztha20MZ0uw" title="Youtube"><i className="fab fa-youtube" /></a></li>
				<li><a href="https://www.linkedin.com/company/leaders-immobilier/" target='blank' title="linkedin"><i className="fab fa-linkedin" /></a></li>
			</ul>
		</div>
        }
}

export default Social