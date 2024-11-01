import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LouerSidebar from './side-louer';

const ShopGridV1 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [selectedType, setSelectedType] = useState('Tous'); 
    const [sortOption, setSortOption] = useState('default');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectedState, setSelectedState] = useState('Tous');


    const publicUrl = process.env.PUBLIC_URL + '/';

    const products = [
        {
            id: 1,
            title: 'Maison à KELIBIA',
            imgSrc: 'assets/img/product-3/1.png',
            location: 'Kelibia, Tunisie',   
            State: 'Nabeul',   
            beds: 3,
            baths: 2,
            type: 'Maison',
            area: 3450,
            price: 2000,
            date: 2025
        },
        {
            id: 2,
            title: 'Villa à LA SOUKRA',
            imgSrc: 'assets/img/product-3/2.png',
            location: 'Soukra, Tunisie',
            State: 'Tunis',
            beds: 3,
            baths: 2,
            type: 'Villa',
            area: 3450,
            price: 2500,
            date: 2020
        },
        {
            id: 3,
            title: 'Maison à Sousse',
            imgSrc: 'assets/img/product-3/3.png',
            location: 'Sousse, Tunisie',
            State: 'Sousse',
            beds: 3,
            type: 'Maison',
            baths: 2,
            area: 3450,
            price: 300,
            date: 2001
        },
        {
            id: 4,
            title: 'Etage de villa à ENNASR',
            imgSrc: 'assets/img/product-3/4.png',
            location: 'Sfax, Tunisie',
            State: 'Sfax',
            beds: 3,
            type: 'Etage de villa',
            baths: 2,
            area: 3450,
            price: 1500,
            date: 2005  
        },
    ];

    const handlePriceRangeChange = (min, max) => {
        setPriceRange([min, max]);
    };

    const handleTypeChange = (type) => {
        setSelectedType(type); 
    };

    const handleSortChange = (selectedSortOption) => {
        setSortOption(selectedSortOption);
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
    };

    

    useEffect(() => {
        const filtered = products.filter(product => {
            const priceValue = parseInt(product.price, 10);
            return (
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                priceValue >= priceRange[0] &&
                priceValue <= priceRange[1] &&
                (selectedType === 'Tous' || product.type === selectedType) &&
                (selectedState === 'Tous' || product.State === selectedState) 
            );
        });
        setFilteredProducts(filtered);
    }, [searchTerm, priceRange, selectedType, selectedState]);

    useEffect(() => {
        const sorted = [...filteredProducts].sort((a, b) => {
            switch (sortOption) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'newest':
                    return b.date - a.date; 
                case 'default':
                default:
                    return a.title.localeCompare(b.title);
            }
        });
        setSortedProducts(sorted);
    }, [filteredProducts, sortOption]);

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
                                            <span>Showing 1–12 of {sortedProducts.length} results</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="short-by text-center">
                                            <div className="sort-radios">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="sortOption"
                                                        value="default"
                                                        checked={sortOption === 'default'}
                                                        onChange={(e) => handleSortChange(e.target.value)}
                                                    />
                                                    
                                                    Défaut
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="sortOption"
                                                        value="newest"
                                                        checked={sortOption === 'newest'}
                                                        onChange={(e) => handleSortChange(e.target.value)}
                                                    />
                                                    Nouveautés
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="sortOption"
                                                        value="price-asc"
                                                        checked={sortOption === 'price-asc'}
                                                        onChange={(e) => handleSortChange(e.target.value)}
                                                    />
                                                    Croissant
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="sortOption"
                                                        value="price-desc"
                                                        checked={sortOption === 'price-desc'}
                                                        onChange={(e) => handleSortChange(e.target.value)}
                                                    />
                                                    Décroissant
                                                </label>
                                            </div>
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
    <form onSubmit={(e) => e.preventDefault()}>
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
                                            {sortedProducts.map(product => (
                                                <div className="col-xl-6 col-sm-6 col-12" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                        <div className="product-img go-top">
                                                            <Link to="/product-details">
                                                                <img src={publicUrl + product.imgSrc} alt={product.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="product-badge">
                                                                <ul>
                                                                    <li className="sale-badg">à louer</li>
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
                                                                <span>{product.price}<label>/Month</label></span>
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
                                                    <form onSubmit={(e) => e.preventDefault()}>
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
                                            {sortedProducts.map(product => (
                                                <div className="col-lg-12" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                                                        <div className="product-img go-top">
                                                            <Link to="/product-details">
                                                                <img src={publicUrl + product.imgSrc} alt={product.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="product-badge-price">
                                                                <div className="product-badge">
                                                                    <ul>
                                                                        <li className="sale-badg">à louer</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span>{product.price}<label>/Month</label></span>
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
                        <LouerSidebar 
    onPriceRangeChange={handlePriceRangeChange} 
    onTypeChange={handleTypeChange} 
    onStateChange={handleStateChange} 
/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopGridV1;
