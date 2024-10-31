import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV1 extends Component {
    products = [
        {
            id: 1,
            image: 'assets/img/product-3/4.png',
            badge: 'à louer',
            location: 'Kelibia, Tunisie',
            price: '1500Dt',
            title: 'Terrain à KELIBIA',
            description: 'Magnifique grande maison familiale au cœur de Westbury. Récemment rénovée avec du nouveau bois',
            bedrooms: 3,
            bathrooms: 2,
            squareFt: 3450,
        },
        {
            id: 2,
            image: 'assets/img/product-3/3.png',
            badge: 'à louer',
            location: 'Soukra, Tunisie',
            price: '1500Dt',
            title: 'Immeuble à LA SOUKRA',
            description: 'Magnifique grande maison familiale au cœur de Westbury. Récemment rénovée avec du nouveau bois',
            bedrooms: 3,
            bathrooms: 2,
            squareFt: 3450,
        },
        {
            id: 3,
            image: 'assets/img/product-3/1.png',
            badge: 'à louer',
            location: 'Etage de villa à ENNASR',
            price: '1500Dt',
            title: 'Appartement à L AOUINA',
            description: 'Magnifique grande maison familiale au cœur de Westbury. Récemment rénovée avec du nouveau bois',
            bedrooms: 3,
            bathrooms: 2,
            squareFt: 3450,
        },
        {
            id: 4,
            image: 'assets/img/product-3/2.png',
            badge: 'à louer',
            location: 'kelibia, Tunisie',
            price: '1500Dt',
            title: 'Maison à KELIBIA',
            description: 'Magnifique grande maison familiale au cœur de Westbury. Récemment rénovée avec du nouveau bois',
            bedrooms: 3,
            bathrooms: 2,
            squareFt: 3450,
        },
        {
            id: 5,
            image: 'assets/img/product-3/4.png',
            badge: 'à louer',
            location: 'Ennasr, Tunisie',
            price: '1500Dt',
            title: 'Appartement à ENNASR',
            description: 'Magnifique grande maison familiale au cœur de Westbury. Récemment rénovée avec du nouveau bois',
            bedrooms: 3,
            bathrooms: 2,
            squareFt: 3450,
        },
    ];

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <div>
                <div className="ltn__product-slider-area ltn__product-gutter pb-20 plr--7">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color mb-30">NOUVEAUTÉS</h6>
                                    <h1 className="section-title">À Louer</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1">
                            {this.products.map(product => (
                                <div className="col-lg-12" key={product.id}>
                                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                                        <div className="product-img go-top">
                                            <Link to="/product-details">
                                                <img src={publicUrl + product.image} alt={product.title} />
                                            </Link>
                                            <div className="product-badge">
                                                <ul>
                                                    <li className={`sale-badge ${product.badge === 'à louer' ? 'bg-green' : 'bg-green---'}`}>{product.badge}</li>
                                                </ul>
                                            </div>
                                            <div className="product-img-location-gallery">
                                                <div className="product-img-location">
                                                    <ul>
                                                        <li>
                                                            <Link to="/contact"><i className="flaticon-pin" /> {product.location}</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-img-gallery go-top">
                                                    <ul>
                                                        <li>
                                                            <Link to="/product-details"><i className="fas fa-camera" /> 4</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/product-details"><i className="fas fa-film" /> 2</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-price">
                                                <span>{product.price}<label>/Month</label></span>
                                            </div>
                                            <h2 className="product-title go-top"><Link to="/product-details">{product.title}</Link></h2>
                                            <div className="product-description">
                                                <p>{product.description}</p>
                                            </div>
                                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                                <li><span>{product.bedrooms} <i className="flaticon-bed" /></span> Chambres</li>
                                                <li><span>{product.bathrooms} <i className="flaticon-clean" /></span> salles de bains</li>
                                                <li><span>{product.squareFt} <i className="flaticon-square-shape-design-interface-tool-symbol" /></span> carrés</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
						<div className="text-center mt-4">
                            <Link to="/louer" className="btn btn-primary voir" >
                                Voir Plus
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Other modals and components can remain the same */}

            </div>
        );
    }
}

export default ProductSliderV1;
