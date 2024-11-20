import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';

        // Define the data as a constant array
        const imageData = [
            {
                imgSrc: publicUrl + "assets/img/events/elu/5.jpg",
                title: "Heart of NYC",
                location: "Manhattan",
                detailsLink: "/portfolio-details",
            },
            {
                imgSrc: publicUrl + "assets/img/events/car1/4.jpg",
                title: "The luxury crib",
                location: "Upper East Side",
                detailsLink: "/portfolio-details",
            },
        
            {
                imgSrc: publicUrl + "assets/img/events/car2/2.jpg",
                title: "The perfect city",
                location: "Greenville",
                detailsLink: "/portfolio-details",
            },
            {
                imgSrc: publicUrl + "assets/img/events/car2/3.jpg",
                title: "The perfect city",
                location: "Greenville",
                detailsLink: "/portfolio-details",
            },
			{
                imgSrc: publicUrl + "assets/img/events/elu/1.jpg",
                title: "The Best City",
                location: "Jersey City",
                detailsLink: "/portfolio-details",
            },
            {
                imgSrc: publicUrl + "assets/img/events/car1/2.jpg",
                title: "Friendly neighborhood",
                location: "Queens",
                detailsLink: "/portfolio-details",
            },
			
            {
                imgSrc: publicUrl + "assets/img/events/elu/8.jpg",
                title: "The perfect city",
                location: "Greenville",
                detailsLink: "/portfolio-details",
            },
        ];

        return (
            <div className="ltn__img-slider-area">
                <div className="container-fluid " style={{margin:"150px 0"}}>
				<div className="section-title-area ltn__section-title-2--- text-center">
                            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">ÉVÉNEMENTS</h6>
                            <h1 className="section-title">EXPLOREZ NOS ÉVÉNEMENTS							</h1>
                        </div>
                    <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                        {imageData.map((item, index) => (
                            <div className="col-lg-12" key={index}>
                                <div className="ltn__img-slide-item-4">
                                    <a href={item.imgSrc} data-rel="lightcase:myCollection">
                                        <img src={item.imgSrc} alt="Image" />
                                    </a>
                                    <div className="ltn__img-slide-info">
                                        <div className="ltn__img-slide-info-brief gp-top">
                                            <h6>{item.title}</h6>
                                            <h1>
                                                <Link to="/events">{item.location}</Link>
                                            </h1>
                                        </div>
                                        <div className="btn-wrapper go-top">
                                            <Link
                                               to="/events"
                                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                            >
                                                Détails
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
