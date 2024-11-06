import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioV1 = () => {
  const [visibleVideos, setVisibleVideos] = useState(6); 
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
    
  ];

  
  const handleLoadMore = () => {
    setVisibleVideos(prevVisibleVideos => prevVisibleVideos + 3);
  };

  return (
    <div className="ltn__gallery-area mb-120">
      <div className="container">
        <div className="row">
		<div className="text-center">
						<h1 className="section-title">Lorem ipsum	</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</p>
					</div>
          {videoCollection.slice(0, visibleVideos).map((videoUrl, index) => (
            <div key={index} className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href={videoUrl} data-rel="lightcase:myCollection">
                    <img
                      src={`https://img.youtube.com/vi/${videoUrl.split('/')[4]}/0.jpg`} 
                      alt="Video Thumbnail"
                    />
                    <span className="ltn__gallery-action-icon">
                      <i className="fab fa-youtube" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  <h4 className="go-top">
                    <Link to="/portfolio-details">Hkeyetna</Link>
                  </h4>
				  <p>Histoire de l'agence immobilière</p>

                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleVideos < videoCollection.length && (
          <div className="btn-wrapper text-center">
            <button onClick={handleLoadMore} className="btn btn-transparent btn-effect-3 btn-border">
			Voir Plus +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioV1;
