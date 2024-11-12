import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_API_URL}api/v2/biens/detail`,
                    { id: id },
                    { headers: { Authorization: 'jkaAVXs852ZPOnlop795' } }
                );
                const productData = response.data?.resultat?.[0];
                if (productData) setProduct(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    // Ensure listImages exists and is an array, then filter and map
    const images = (product?.listImages || []).filter(image => image.version_web)
        .map(image => `${process.env.REACT_APP_API_URL}${image.version_web}`);

    // Use placeholder images if no valid images are available
    const finalImages = images.length > 0 
        ? images 
        : new Array(4).fill('https://placehold.co/1920x1080/png');

    // Slick slider settings for react-slick
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        prevArrow: <button type="button" className="slick-prev">←</button>,
        nextArrow: <button type="button" className="slick-next">→</button>,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="ltn__img-slider-area mb-90">
            <div className="container-fluid">
                {/* Render Slider only if there are images to display */}
                <Slider {...sliderSettings} className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    {finalImages.map((image, index) => (
                        <div className="col-lg-3" key={index}>
                            <div
                                className="ltn__img-slide-item-4"
                                style={{
                                    border: '1px solid white',
                                    boxSizing: 'border-box',
                                    padding: '1px',
                                }}
                            >
                                <a href={image} data-rel="lightcase:myCollection">
                                    <img
                                        src={image}
                                        alt={`Product image ${index + 1}`}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '400px',
                                        }}
                                        onError={(e) => e.target.src = 'https://placehold.co/1920x1080/png'}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductDetail;
