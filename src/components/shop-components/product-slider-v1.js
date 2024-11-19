import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % finalImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + finalImages.length) % finalImages.length
        );
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!product) return <p>Aucune propriété trouvée</p>;

    const images = (product?.listImages || []).filter(image => image.version_web)
        .map(image => `${process.env.REACT_APP_API_URL}${image.version_web}`);

    const placeholdersNeeded = Math.max(0, 4 - images.length);
    const finalImages = [...images, ...new Array(placeholdersNeeded).fill('https://workingat.vu.nl/static/images/placeholder-image.jpg')];

    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        prevArrow: <button type="button" ><i className="fas fa-chevron-left"></i></button>,
        nextArrow: <button type="button"><i className="fas fa-chevron-right"></i></button>,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="ltn__img-slider-area mb-90">
            <div className="container-fluid">
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
                                <a href="#" onClick={(e) => { e.preventDefault(); openModal(index); }}>
                                    <img
                                        src={image}
                                        alt={`Product image ${index + 1}`}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '440px',
                                        }}
                                        onError={(e) => e.target.src = 'https://workingat.vu.nl/static/images/placeholder-image.jpg'}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-button" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="modal-image-container">
                            <button className="prev-button" onClick={prevImage}> <i className="fas fa-chevron-left"></i> </button>
                            <img
                                src={finalImages[currentImageIndex]}
                                alt={`Modal image ${currentImageIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                }}
                            />
                            <button className="next-button" onClick={nextImage}> <i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
