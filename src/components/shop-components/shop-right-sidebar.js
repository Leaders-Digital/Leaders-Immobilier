import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './shop-sidebar';

const ShopGridV1 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        {
            id: 1,
            title: 'Maison à KELIBIA',
            imgSrc: 'assets/img/product-3/1.png',
            location: 'Kelibia, Tunisie',
            beds: 3,
            baths: 2,
            area: 3450,
            price: '403500 TND',
        },
        {
            id: 2,
            title: 'Immeuble à LA SOUKRA',
            imgSrc: 'assets/img/product-3/2.png',
            location: 'Soukra, Tunisie',
            beds: 3,
            baths: 2,
            area: 3450,
            price: '403500 TND',
        },
        {
            id: 3,
            title: 'Maison à KELIBIA',
            imgSrc: 'assets/img/product-3/3.png',
            location: 'Kelibia, Tunisie',
            beds: 3,
            baths: 2,
            area: 3450,
            price: '403500 TND',
        },
        {
            id: 4,
            title: 'Etage de villa à ENNASR',
            imgSrc: 'assets/img/product-3/4.png',
            location: 'Kelibia, Tunisie',
            beds: 3,
            baths: 2,
            area: 3450,
            price: '403500 TND',
        },
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="ltn__product-area ltn__product-gutter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-100">
                            <div className="ltn__shop-options">
                                <ul className="justify-content-start">
                                    <li>
                                        <div className="ltn__grid-list-tab-menu">
                                            <div className="nav">
                                                <a className="active show" data-bs-toggle="tab" href="#liton_product_grid">
                                                    <i className="fas fa-th-large" />
                                                </a>
                                                <a data-bs-toggle="tab" href="#liton_product_list">
                                                    <i className="fas fa-list" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-none">
                                        <div className="showing-product-number text-right">
                                            <span>Showing 1–12 of {filteredProducts.length} results</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="short-by text-center">
                                            <select className="nice-select">
                                                <option>Tri par défaut</option>
                                                <option>Trier par nouveautés</option>
                                                <option>Trier par prix : croissant</option>
                                                <option>Trier par prix : décroissant</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="liton_product_grid">
                                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* Search Widget */}
                                                <div className="ltn__search-widget mb-30">
                                                    <form action="#">
                                                        <input 
                                                            type="text" 
                                                            name="search" 
                                                            placeholder="Recherche par nom..." 
                                                            value={searchTerm}
                                                            onChange={(e) => setSearchTerm(e.target.value)} 
                                                        />
                                                        <button type="submit"><i className="fas fa-search" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* Product Items */}
                                            {filteredProducts.map(product => (
                                                <div className="col-xl-6 col-sm-6 col-12" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                        <div className="product-img go-top">
                                                            <Link to="/product-details">
                                                                <img src={process.env.PUBLIC_URL + product.imgSrc} alt={product.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="product-badge">
                                                                <ul>
                                                                    <li className="sale-badg">à vendre</li>
                                                                </ul>
                                                            </div>
                                                            <h2 className="product-title go-top">
                                                                <Link to="/product-details">{product.title}</Link>
                                                            </h2>
                                                            <div className="product-img-location go-top">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/contact"><i className="flaticon-pin" /> {product.location}</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                <li><span>{product.beds}</span> Lits</li>
                                                                <li><span>{product.baths}</span> Salles de bains</li>
                                                                <li><span>{product.area}</span> Carrés</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-info-bottom">
                                                            <div className="product-price">
                                                                <span>{product.price}<label></label></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_product_list">
                                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* Search Widget */}
                                                <div className="ltn__search-widget mb-30">
                                                    <form action="#">
                                                        <input 
                                                            type="text" 
                                                            name="search" 
                                                            placeholder="Recherche par nom..." 
                                                            value={searchTerm}
                                                            onChange={(e) => setSearchTerm(e.target.value)} 
                                                        />
                                                        <button type="submit"><i className="fas fa-search" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* Product List Items */}
                                            {filteredProducts.map(product => (
                                                <div className="col-lg-12" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                                                        <div className="product-img go-top">
                                                            <Link to="/product-details">
                                                                <img src={process.env.PUBLIC_URL + product.imgSrc} alt={product.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="product-badge-price">
                                                                <div className="product-badge">
                                                                    <ul>
                                                                        <li className="sale-badg">à vendre</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span>{product.price}<label></label></span>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-title go-top">
                                                                <Link to="/product-details">{product.title}</Link>
                                                            </h2>
                                                            <div className="product-img-location go-top">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/contact"><i className="flaticon-pin" /> {product.location}</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                <li><span>{product.beds}</span> Lits</li>
                                                                <li><span>{product.baths}</span> Salles de bains</li>
                                                                <li><span>{product.area}</span> Carrés</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                    <ul>
                                        <li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
                                        <li><Link to="#">1</Link></li>
                                        <li className="active"><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">...</Link></li>
                                        <li><Link to="#">10</Link></li>
                                        <li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            {/* Modals and other components omitted for brevity */}
        </div>
    );
};

export default ShopGridV1;
