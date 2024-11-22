import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CopyRight extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
                <div className="container-fluid ltn__border-top-2">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="ltn__copyright-design">
                                <p>
                                    All Rights Reserved © Leaders Digital <span className="current-year" />
                                </p>
                            </div>
                            <div className="ltn__copyright-links text-white">
                                <Link to="/Mentions " className="footer-link">Mentions légales |</Link>
                                <Link to="/Politique" className="footer-link">  Politique de confidentialité |</Link>
                                <Link to="/Cookies" className="footer-link">  Politique de cookies </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CopyRight;
