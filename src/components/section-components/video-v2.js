import React, { useState, useEffect } from 'react';

const VideoV2 = () => {
  const [showSingleButton, setShowSingleButton] = useState(true);


  const videoCollection = [
    'https://www.youtube.com/embed/8YSMwRVno8I',
    'https://www.youtube.com/embed/O9lbospebOo',
    'https://www.youtube.com/embed/7JqMxeqB26w',
    'https://www.youtube.com/embed/8lx7leMm80A',
    'https://www.youtube.com/embed/Qz31FmHWg6E',
    'https://www.youtube.com/embed/vaMad4bNjmA',
    'https://www.youtube.com/embed/yOmhDUgm8rg',
    'https://www.youtube.com/embed/yUgr7K785bA',
    'https://www.youtube.com/embed/D9Cd2BWJFPU',
    'https://www.youtube.com/embed/mUdselZreoc',
    'https://www.youtube.com/embed/LCiDGJ6bkwc',
    'https://www.youtube.com/embed/nuf-XSV4EkA',
    'https://www.youtube.com/embed/Y_mO_ezyJWE',
    'https://www.youtube.com/embed/1-ybJaO0Y3U',
    'https://www.youtube.com/embed/USAaZmx5Kf0',
    'https://www.youtube.com/embed/fyg3HqL1ECs',
    'https://www.youtube.com/embed/wqxsD732EpM',
    'https://www.youtube.com/embed/UwJmzS8l7xY',
    'https://www.youtube.com/embed/UdANxLh2Eno',
    'https://www.youtube.com/embed/i9vATyCv5QA',
    'https://www.youtube.com/embed/5qvAhtzEBC8',
    'https://www.youtube.com/embed/42Fwbj98URk',
    'https://www.youtube.com/embed/H8JqfSbye3E',
    'https://www.youtube.com/embed/nrVliZEMH5s',
    'https://www.youtube.com/embed/EdAUL0pr3Jo',
    'https://www.youtube.com/embed/frJ9UO_vqes',
    'https://www.youtube.com/embed/B6vvbmO_aK4?autoplay=1&showinfo=0',
  ]; return (
    <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90 container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-20">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Histoires</h6>
                <h1 className="section-title">Découvrez Leaders Immobilier Histoires</h1>
                <p>
                  Découvrez l'histoire de Leaders Immobilier à travers nos vidéos, et plongez dans notre parcours, nos valeurs, et notre expertise dans le domaine de l'immobilier.
                </p>
              </div>
              <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
                <li><i className="icon-done" /> Expertise en immobilier résidentiel et commercial</li>
                <li><i className="icon-done" /> Accompagnement pour vos projets</li>
                <li><i className="icon-done" /> Portefeuille varié de propriétés attractives</li>
                <li><i className="icon-done" /> Services de gestion et d'investissement sur mesure</li>
                <li><i className="icon-done" /> Réseau international avec une portée mondiale</li>
                <li><i className="icon-done" /> Approche innovante utilisant les dernières technologies</li>
              </ul>
              
              <div className="text-center mt-30">
            
                <a
                  className="ltn__video-play-btn bg-white--- ltn__secondary-bg"
                  href={videoCollection[0]}
                  data-rel="lightcase:videoCollection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-play ltn__secondary-color--- white-color" />
                </a>

            
                {videoCollection.slice(1).map((videoUrl, index) => (
                  <a
                    key={index + 1}
                    href={videoUrl}
                    data-rel="lightcase:videoCollection"
                    style={{ display: 'none' }}
                  />
                ))}
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
  );
};

export default VideoV2;