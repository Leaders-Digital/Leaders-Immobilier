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
            phone: ' 27 246 301',
        },
        {
            id: 2,
            title: 'Leaders Immobilier Hammamet',
            imgSrc: 'assets/img/logo.png',
            location: ' Barreket sahel Manaret hammamet En face résidence El baraka, 8056, Tunisie',
            phone: ' 27 246 301',
        },
        {
            id: 3,
            title: 'Leaders Immobilier Mrezga ',
            imgSrc: 'assets/img/logo.png',
            location: 'Rue Abu Dhabi 8050 Hammamet, Tunisie',
            phone: ' 27 246 309',
        },
        {
            id: 4,
            title: 'Leaders Immobilier El Aouina',
            imgSrc: 'assets/img/logo.png',
            location: ' El Aouina, résidence RANIA , Tunis, 4216, Tunisie', 
        phone: '  27 246 321',
        },
        {
            id: 4,
            title: 'Leaders Immobilier Kélibia ',
            imgSrc: 'assets/img/logo.png',
            location: 'Kélibia, Tunisia, 8090, Tunisie',
            phone: ' 27 246 316',
        },
        {
            id: 4,
            title: 'Leaders Immobilier Milano ',
            imgSrc: 'assets/img/logo.png',
            location: 'Via Accademia 22, Milan,italie',
            phone: ' +39 346 860 9857 ',
        },
       
        
    ];
    const productItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', 
        textAlign: 'center',
    };

    return (
        <div className="ltn__product-area ltn__product-gutter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div>
                           
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="liton_product_list">
                                <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                <div className="text-center">
						<h1 className="section-title">Lorem ipsum	</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</p>
					</div>
                                    <div className="row">
                               
                                        {products.map((product) => (
                                            <div className="col-lg-6 col-md-12" key={product.id}>
                                                <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                                                    <div className="product-img go-top">
                                                        <Link to="/product-details" >
                                                            <img style={{width:'70%  '}} src={publicUrl + product.imgSrc} alt={product.title} />
                                                        </Link>
                                                    </div>
                                                    <div className="product-info" >
                                                        <div>
                                                            <h2 className="product-title go-top mt-2">
                                                                <Link to="/product-details">{product.title}</Link>
                                                            </h2>
                                                            <div className="product-img-location go-top">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/contact">
                                                                            <i className="flaticon-pin" /> {product.location}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-img-location go-top">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/contact">
                                                                        <i className="fa fa-phone" /> {product.phone}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
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
                </div>
            </div>
        </div>
    );
};

export default ShopGridV1;