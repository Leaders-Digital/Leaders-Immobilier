import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery'; // Assuming jQuery is available if using Slick
import 'slick-carousel'; // Import slick-carousel if needed

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const publicUrl = process.env.PUBLIC_URL + '/';

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

    // Reinitialize Slick after product images are loaded
    useEffect(() => {
        if (!loading && product) {
            setTimeout(() => {
                $('.ltn__image-slider-5-active').slick({
                    slidesToShow: 3, // Show three images if there's enough space
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    prevArrow: '<button type="button" class="slick-prev">←</button>',
                    nextArrow: '<button type="button" class="slick-next">→</button>',
                    dots: false,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ],
                });
            }, 100);
        }
    }, [loading, product]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    const images = product.listImages.map(
        (image) => `${process.env.REACT_APP_API_URL}${image.version_web}`
    );

    return (
        <div className="ltn__img-slider-area mb-90">
            <div className="container-fluid">
                <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    {images.map((image, index) => (
                        <div className="col-lg-4" key={index}>
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
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
