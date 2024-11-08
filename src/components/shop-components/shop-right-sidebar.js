import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './shop-sidebar';
import axios from 'axios';

const ShopGridV1 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [totalItems, setTotalItems] = useState(0);
    const [viewMode, setViewMode] = useState('grid');       

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/biens`, {
            params: {
                page: currentPage,
                itemsPerPage: itemsPerPage,
                type: 'vente'
            }
        })
        .then((response) => {
            const fetchedProducts = response.data.items || response.data; 
            setProducts(fetchedProducts);
            
            const total = response.data.total || fetchedProducts.length; 
            setTotalItems(total); 
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            setProducts([]);
        });
    }, [currentPage, itemsPerPage]);

    const totalPages = 20;

    const filteredProducts = products.filter(product =>
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type_categorie?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ville?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.delegation?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

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
                                                <a 
                                                    className={viewMode === 'grid' ? "active show" : ""} 
                                                    data-bs-toggle="tab" 
                                                    href="#liton_product_grid" 
                                                    onClick={() => handleViewModeChange('grid')}
                                                >
                                                    <i className="fas fa-th-large" />
                                                </a>
                                                <a 
                                                    className={viewMode === 'list' ? "active show" : ""} 
                                                    data-bs-toggle="tab" 
                                                    href="#liton_product_list" 
                                                    onClick={() => handleViewModeChange('list')}
                                                >
                                                    <i className="fas fa-list" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="showing-product-number text-right">
                                            <span>Showing {filteredProducts.length} of {totalItems} results</span>
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
                                {/* Grid View */}
                                {viewMode === 'grid' && (
                                    <div className="tab-pane fade active show" id="liton_product_grid">
                                        <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                            <div className="row">
                                                {/* Search Widget */}
                                                <div className="col-lg-12">
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
                                                {/* Product Items (Grid View) */}
                                                {filteredProducts.length > 0 ? (
                                                    filteredProducts.map(product => {
                                                        return (
                                                            <div className="col-xl-6 col-sm-6 col-12" key={product.id}>
                                                                <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                                    <div className="product-img go-top">
                                                                    <Link to={`/product-details/${product.id}`}>
    <img 
        src={`${process.env.REACT_APP_API_URL}${product.listImages?.[0]?.version_web}`} 
        onError={(e) => e.target.src = 'https://placehold.co/600x400/png'}  
    />  
</Link>

                                                                    </div>
                                                                    <div className="product-info">
                                                                        <div className="product-badge">
                                                                            <ul>
                                                                                <li className="sale-badge">{product.type}</li>
                                                                            </ul>
                                                                        </div>
                                                                        <h2 className="product-title">
                                                                            <Link to={`/product-details/${product.id}`}>{product.type_categorie} à {product.delegation}</Link>
                                                                        </h2>
                                                                        <div className="product-img-location go-top">
                                                                            <ul>
                                                                                <li>
                                                                                    <Link to="#"><i className="flaticon-pin" /> {product.ville}, {product.delegation}</Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
    {product.caracteristiqueBien.nbr_chambre && (
        <li><span>{product.caracteristiqueBien.nbr_chambre}</span> Lits</li>
    )}
    {product.caracteristiqueBien.nbr_salle_bain && (
        <li><span>{product.caracteristiqueBien.nbr_salle_bain}</span> Salles de bains</li>
    )}
    {product.caracteristiqueBien.superficieTotal && (
        <li><span>{product.caracteristiqueBien.superficieTotal}</span> m²</li>
    )}
</ul>

                                                                    </div>
                                                                    <div className="product-info-bottom">
                                                                        <div className="product-price">
                                                                            <span>{product.prixVente} <label>TND</label></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <p>Aucun bien trouvé</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* List View */}
                                {viewMode === 'list' && (
                                    <div className="tab-pane fade active show" id="liton_product_list">
                                        <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                            <div className="row">
                                                {/* Product Items (List View) */}
                                                {filteredProducts.length > 0 ? (
                                                    filteredProducts.map(product => (
                                                        <div className="col-lg-12" key={product.id}>
                                                            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                                                                <div className="product-img go-top">
                                                                    <Link to={`/product-details/${product.id}`}>
                                                                        <img 
                                                                               src={`${process.env.REACT_APP_API_URL}${product.listImages?.[0]?.version_web}`} 
                                                                               onError={(e) => e.target.src = 'https://placehold.co/600x400/png'} 
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="product-info">
                                                                    <div className="product-badge-price">
                                                                        <div className="product-badge">
                                                                            <ul>
                                                                                <li className="sale-badge">à louer</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="product-price">
                                                                            <span>{product.prixVente} <label>/Mois</label></span>
                                                                        </div>
                                                                    </div>
                                                                    <h2 className="product-title go-top">
                                                                        <Link to={`/product-details/${product.id}`}>{product.type_categorie} à {product.delegation}</Link>
                                                                    </h2>
                                                                    <div className="product-img-location go-top">
                                                                        <ul>
                                                                            <li>
                                                                                <Link to="#"><i className="flaticon-pin" /> {product.ville}, {product.delegation}</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                        <li><span>{product.caracteristiqueBien.nbr_chambre}</span> Lits</li>
                                                                        <li><span>{product.caracteristiqueBien.nbr_salle_bain}</span> Salles de bains</li>
                                                                        <li><span>{product.caracteristiqueBien.superficieTotal}</span> m²</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>Aucun bien trouvé</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Pagination */}
                            <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                    <ul>
                                        <li
                                            className={currentPage === 1 ? "disabled" : ""}
                                            onClick={handlePreviousPage}
                                        >
                                            <Link to="#"><i className="fas fa-angle-double-left" /></Link>
                                        </li>
                                        {[...Array(totalPages).keys()].map((page) => (
                                            <li key={page + 1} className={page + 1 === currentPage ? 'active' : ''}>
                                                <Link to="#" onClick={() => setCurrentPage(page + 1)}>{page + 1}</Link>
                                            </li>
                                        ))}
                                        <li
                                            className={currentPage === totalPages ? "disabled" : ""}
                                            onClick={handleNextPage}
                                        >
                                            <Link to="#"><i className="fas fa-angle-double-right" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopGridV1;
