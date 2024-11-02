import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV1 extends Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + '/';
        
      
        const images = [
            "assets/img/img-slide/1.png",
            "assets/img/img-slide/2.png",
            "assets/img/img-slide/3.png",
            "assets/img/img-slide/4.jpg",
            "assets/img/img-slide/5.jpg"
        ];

        return (
            <div className="ltn__img-slider-area mb-90">
                <div className="container-fluid">
                    <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                        {images.map((image, index) => (
                            <div className="col-lg-12" key={index}>
                                <div className="ltn__img-slide-item-4">
                                    <a href={publicUrl + image} data-rel="lightcase:myCollection">
                                        <img src={publicUrl + image} alt={`Image ${index + 1}`} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSliderV1;
