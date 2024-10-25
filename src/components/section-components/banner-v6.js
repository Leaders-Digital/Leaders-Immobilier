import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">

				<video autoPlay muted loop id="myVideo">
					<source src={publicUrl+"assets/media/3.mp4"} type="video/mp4" />
				</video>

				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30" data-bs-bg={publicUrl+"assets/img/slider/41.jpg"}>
					<div className="ltn__slide-item-inner text-center">
					<div className="container">
						<div className="row">
						<div className="col-lg-12 align-self-center">
							<div className="slide-item-car-dealer-form">
							<div className="section-title-area ltn__section-title-2 text-center">
								<h1 className="section-title  text-color-white">Find Your <span className="ltn__secondary-color-3">Perfect</span> Home</h1>
							</div>
							                            
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default BannerV6