import React from 'react';
import { Link } from 'react-router-dom';

const ShopGridV1 = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';

    const products = [
        {
            id: 1,
            title: 'Leaders Immobilier Les berges du lac 2',
            imgSrc: 'assets/img/logo.png',
            location: 'Cité les Pins, En face clinique Hannibal, Tunis',   
            phone: ' 27 246 301',
        },
        {
            id: 2,
            title: 'Leaders Immobilier Hammamet',
            imgSrc: 'assets/img/logo.png',
            location: 'Barreket sahel Manaret hammamet, 8056, Tunisie',
            phone: ' 27 246 301',
        },
        {
            id: 3,
            title: 'Leaders Immobilier Mrezga ',
            imgSrc: 'assets/img/logo.png',
            location: 'Rue Abu Dhabi 8050 Hammamet, Tunisie',
            phone: ' 27 246 309',
        },
        {
            id: 4,
            title: 'Leaders Immobilier El Aouina',
            imgSrc: 'assets/img/logo.png',
            location: 'El Aouina, résidence RANIA , Tunis, 4216, Tunisie', 
            phone: ' 27 246 321',
        },
        {
            id: 5,
            title: 'Leaders Immobilier Kélibia ',
            imgSrc: 'assets/img/logo.png',
            location: 'Kélibia, Tunisia, 8090, Tunisie',
            phone: ' 27 246 316',
        },
        {
            id: 6,
            title: 'Leaders Immobilier Milano ',
            imgSrc: 'assets/img/logo.png',
            location: 'Via Accademia 22, Milan, Italie',
            phone: ' +39 346 860 9857 ',
        },
    ];

    const productItemStyle = {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '20px',
        border: '1px solid #ddd', 
        padding: '10px',
        height: '200px',
        
    };

    const productImgStyle = {
        width: '120px ', 
        marginRight: '20px', 
    };

    const productTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };
    

    return (
        <div className="product-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1 className="section-title">Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.</p>
                        </div>
                        <div className="row">
                            {products.map((product) => (
                                <div className="col-lg-6 col-md-12" key={product.id}>
                                    <div className="product-item" style={productItemStyle}>
                                        <div className="product-pic" style={productImgStyle}>
                                            <img src={publicUrl + product.imgSrc} alt={product.title} />
                                        </div>
                                        <div className="product-info" style={productTextStyle}>
                                            <h2 className="product-title">
                                                <Link to="/product-details">{product.title}</Link>
                                            </h2>
                                            <div className="product-location">
                                                <Link to="/contact">
                                                    <i className="flaticon-pin" /> {product.location}
                                                </Link>
                                            </div>
                                            <div className="product-phone">
                                                <Link to="/contact">
                                                    <i className="fa fa-phone" /> {product.phone}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopGridV1;
