import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Histoires</h6>
			            <h1 className="section-title">Découvrez Leaders Immobilier Histoires</h1>
						<p>Découvrez l'histoire de Leaders Immobilier à travers nos vidéos, et plongez dans notre parcours, nos valeurs, et notre expertise dans le domaine de l'immobilier.</p>

			          </div>
					  <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
  <li>
    <i className="icon-done" />
    Expertise en immobilier résidentiel et commercial
  </li>
  <li>
    <i className="icon-done" />
    Accompagnement personnalisé pour vos projets
  </li>
  <li>
    <i className="icon-done" />
    Portefeuille varié de propriétés attractives
  </li>
  <li>
    <i className="icon-done" />
    Services de gestion et d'investissement sur mesure
  </li>
  <li>
    <i className="icon-done" />
    Réseau international avec une portée mondiale
  </li>
  <li>
    <i className="icon-done" />
    Approche innovante utilisant les dernières technologies
  </li>
</ul>

			          <div className="  ltn__animation-pulse2 text-center mt-30">
			            <a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/B6vvbmO_aK4?autoplay=1&showinfo=0" data-rel="lightcase">
			              <i className="icon-play  ltn__secondary-color--- white-color" />
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default VideoV2