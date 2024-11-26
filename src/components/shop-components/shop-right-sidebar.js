import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Select, MenuItem, FormControl, InputLabel, Typography, Input, InputAdornment } from '@mui/material';
import stateMunicipalities from './state-municipality.json';

const ShopGridV1 = () => {
    const location = useLocation();
    const [type, setType] = useState('vente');
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [totalItems, setTotalItems] = useState(0);
    const [viewMode, setViewMode] = useState('grid');
    const [typeCategorie, setTypeCategorie] = useState(location.state?.typeCategorie || "");
    const [ville, setVille] = useState(location.state?.ville || "");
    const [delegation, setDelegation] = useState('');
    const [nbrChambre, setNbrChambre] = useState('');
    const [prixMin, setPrixMin] = useState();
    const [prixMax, setPrixMax] = useState();

    // Update state based on location if values exist


    // Function to fetch products based on the current filters

    const getAvailableDelegations = (selectedVille) => {
        const state = stateMunicipalities.find(
            (item) => item.Name.toUpperCase() === selectedVille.toUpperCase()
        );
        return state ? state.Delegations.map((del) => del.Name) : [];
    };

    const availableDelegations = getAvailableDelegations(ville);
    useEffect(() => {
        setDelegation(''); // Reset to default value (or "all" if preferred)
    }, [ville]);


    const fetchProducts = () => {
        const body = {
            page: currentPage,
            itemPerPage: itemsPerPage,
            type,
            typeCategorie: typeCategorie ? [typeCategorie] : [],  // Handle typeCategorie correctly
            ville: ville ? [ville] : [],
            delegation: delegation ? [delegation] : [],
            chambre: nbrChambre ? parseInt(nbrChambre) : null,
            prixMin,
            prixMax
        };



        axios.post(`${process.env.REACT_APP_API_URL}api/v2/biens`, body, {
            headers: {
                Authorization: 'jkaAVXs852ZPOnlop795'
            }
        })
            .then((response) => {
                const fetchedProducts = Array.isArray(response.data.resultat) ? response.data.resultat : [];
                setProducts(fetchedProducts);
                const total = response.data.totalItems || fetchedProducts.length;
                setTotalItems(total);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setProducts([]);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, type, typeCategorie, ville, delegation, nbrChambre, prixMin, prixMax]);  // Ensure all states are part of the dependency array

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchProducts();
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPaginationPages = () => {
        const pages = [];
        const delta = 1; // Number of pages to show before and after the current page
        let startPage = Math.max(1, currentPage - delta);
        let endPage = Math.min(totalPages, currentPage + delta);

        if (startPage > 1) {
            pages.push(1);
        }

        if (startPage > 2) {
            pages.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages - 1) {
            pages.push('...');
        }

        if (endPage < totalPages) {
            pages.push(totalPages);
        }

        return pages;
    };

    const filteredProducts = products.filter(product =>
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.typeCategorie?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ville?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.delegation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (nbrChambre && product.chambre === parseInt(nbrChambre))
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

	window.scrollTo(0, 0);


    return (
        <div>
            {/* Updated select with state */}


            <div className="ltn__product-area ltn__product-gutter">
                <div className="container">
                    <div className="row">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                                <div className="car-dealer-form-inner">
                                    <div className="ltn__car-dealer-form-box row">


                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-building col-lg-4 col-md-6">

                                            <FormControl fullWidth>
                                                <InputLabel>Type de bien</InputLabel>
                                                <Select
                                                    value={typeCategorie}
                                                    onChange={(e) => setTypeCategorie(e.target.value)}
                                                    label="Type de bien"
                                                    MenuProps={{
                                                        PaperProps: {
                                                            style: {
                                                                position: 'absolute',
                                                                top: 'auto',
                                                                bottom: '0',
                                                                maxHeight: '200px',
                                                                overflowY: 'auto'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value="">Type de bien</MenuItem>
                                                    <MenuItem value="Appartement">Appartement</MenuItem>
                                                    <MenuItem value="Villa">Villa</MenuItem>
                                                    <MenuItem value="Maison">Maison</MenuItem>
                                                    <MenuItem value="Terrain constructible">Terrain</MenuItem>
                                                    <MenuItem value="Bureau">Bureau</MenuItem>
                                                    <MenuItem value="Etage de villa">Etage de villa</MenuItem>
                                                    <MenuItem value="Local commercial">Local commercial</MenuItem>

                                                </Select>
                                            </FormControl>

                                        </div>

                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-city col-lg-4 col-md-6">
                                            <FormControl fullWidth>
                                                <InputLabel>Ville</InputLabel>
                                                <Select
                                                    value={ville}
                                                    onChange={(e) => setVille(e.target.value)}
                                                    label="Ville"
                                                    MenuProps={{
                                                        PaperProps: {
                                                            style: {
                                                                position: 'absolute',
                                                                top: 'auto',
                                                                bottom: '0',
                                                                maxHeight: '200px',
                                                                overflowY: 'auto'
                                                            }
                                                        }
                                                    }}
                                                >
                                    
    <MenuItem value="">Ville</MenuItem>
    <MenuItem value="Ariana">Ariana</MenuItem>
    <MenuItem value="Beja">Beja</MenuItem>
    <MenuItem value="Ben Arous">Ben Arous</MenuItem>
    <MenuItem value="Bizerte">Bizerte</MenuItem>
    <MenuItem value="Gabès">Gabès</MenuItem>
    <MenuItem value="Gafsa">Gafsa</MenuItem>
    <MenuItem value="Jendouba">Jendouba</MenuItem>
    <MenuItem value="Kairouan">Kairouan</MenuItem>
    <MenuItem value="Kasserine">Kasserine</MenuItem>
    <MenuItem value="Kébili">Kébili</MenuItem>
    <MenuItem value="Le Kef">Le Kef</MenuItem>
    <MenuItem value="Mahdia">Mahdia</MenuItem>
    <MenuItem value="Manouba">Manouba</MenuItem>
    <MenuItem value="Médenine">Médenine</MenuItem>
    <MenuItem value="Monastir">Monastir</MenuItem>
    <MenuItem value="Nabeul">Nabeul</MenuItem>
    <MenuItem value="Sfax">Sfax</MenuItem>
    <MenuItem value="Sidi Bouzid">Sidi Bouzid</MenuItem>
    <MenuItem value="Siliana">Siliana</MenuItem>
    <MenuItem value="Sousse">Sousse</MenuItem>
    <MenuItem value="Tataouine">Tataouine</MenuItem>
    <MenuItem value="Tozeur">Tozeur</MenuItem>
    <MenuItem value="Tunis">Tunis</MenuItem>
    <MenuItem value="Zaghouan">Zaghouan</MenuItem>
                                                    {/* Add other cities here */}
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-mark col-lg-4 col-md-6">
                                            <FormControl fullWidth>
                                                <InputLabel>Délégation</InputLabel>
                                                <Select
                                                  MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            position: 'absolute',
                                                            top: 'auto',
                                                            bottom: '0',
                                                            maxHeight: '200px',
                                                            overflowY: 'auto'
                                                        }
                                                    }
                                                }}
                                                    value={delegation}
                                                    onChange={(e) => setDelegation(e.target.value)}
                                                    label="Délégation"
                                                  
                                                    disabled={ville === ''} 
                                                >
                                                    {availableDelegations.length > 0 ? (
                        availableDelegations.map((del, index) => (
                            <MenuItem key={index} value={del}>
                                {del}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem value="">Aucune délégation disponible</MenuItem> // Placeholder if no delegations
                    )}
                </Select>
            </FormControl>
        </div>
    

                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-bed col-lg-4 col-md-6">
                                            <FormControl fullWidth>
                                                <InputLabel>Nombre de chambres</InputLabel>
                                                <Select
                                                    value={nbrChambre}
                                                    onChange={(e) => setNbrChambre(e.target.value)}
                                                    label="Nombre de chambres"
                                                    MenuProps={{
                                                        PaperProps: {
                                                            style: {
                                                                position: 'absolute',
                                                                top: 'auto',
                                                                bottom: '0',
                                                                maxHeight: '200px',
                                                                overflowY: 'auto'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value="">Nombre de chambres</MenuItem>
                                                    <MenuItem value="1">1 Chambre</MenuItem>
                                                    <MenuItem value="2">2 Chambres</MenuItem>
                                                    <MenuItem value="3">3 Chambres</MenuItem>
                                                    <MenuItem value="4">4 Chambres</MenuItem>
                                                    <MenuItem value="5">5 Chambres</MenuItem>
                                                    <MenuItem value="6">6 Chambres</MenuItem>
                                                    <MenuItem value="7">7 Chambres</MenuItem>
                                                    <MenuItem value="8">8 Chambres</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </div>

                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-bed col-lg-4 col-md-6">
  <input
    type="number"
    value={prixMin}
    onChange={(e) => setPrixMin(Number(e.target.value))}
    placeholder="Prix Min"
    className="form-control"
    style={{height: '58px',borderColor:"#e4ecf2"}}
  />
</div>

<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-bed col-lg-4 col-md-6">
  <input
    type="number"
    value={prixMax}
    onChange={(e) => setPrixMax(Number(e.target.value))}
    placeholder="Prix Max"
    className="form-control"  
    style={{height: '58px',borderColor:"#e4ecf2"}}
  />
</div>





                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 mb-100">
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
                                            <span>Affichage de {filteredProducts.length} résultats sur {totalItems}</span>
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
                                                {/* <div className="col-lg-12">
                                                    <div className="ltn__search-widget mb-30">
                                                        <form onSubmit={handleSearch}>
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
                                                </div> */}
                                                {/* Product Items (Grid View) */}
                                                {filteredProducts.length > 0 ? (
                                                    filteredProducts.map(product => (
                                                        <div className="col-xl-4 col-md-6 col-12" key={product.id}>
                                                            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                                <div className="product-img go-top">
                                                                    <Link to={`/product-details/${product.id}`}>
                                                                        <img
                                                                            src={`${process.env.REACT_APP_API_URL}${product.listImages?.[0]?.version_web}`}
                                                                            onError={(e) => e.target.src = 'https://workingat.vu.nl/static/images/placeholder-image.jpg'}
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
                                                                        {product.caracteristiqueBien?.nbr_chambre && (
                                                                            <li><span>{product.caracteristiqueBien.nbr_chambre}</span> Chambres</li>
                                                                        )}
                                                                        {product.caracteristiqueBien?.nbr_salle_bain && (
                                                                            <li><span>{product.caracteristiqueBien.nbr_salle_bain}</span> Salles de bains</li>
                                                                        )}
                                                                        {product.caracteristiqueBien?.superficieTotal && (
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
                                                    ))
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
                                                                            onError={(e) => e.target.src = 'https://workingat.vu.nl/static/images/placeholder-image.jpg'}
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
                                                                        <Link to={`/product-details/${product.id}`}>{product.typeCategorie} à {product.delegation}</Link>
                                                                    </h2>
                                                                    <div className="product-img-location go-top">
                                                                        <ul>
                                                                            <li>
                                                                                <Link to="#"><i className="flaticon-pin" /> {product.ville}, {product.delegation}</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                        {product.caracteristiqueBien?.nbr_chambre && (
                                                                            <li><span>{product.caracteristiqueBien.nbr_chambre}</span> Chambres</li>
                                                                        )}
                                                                        {product.caracteristiqueBien?.nbr_salle_bain && (
                                                                            <li><span>{product.caracteristiqueBien.nbr_salle_bain}</span> Salles de bains</li>
                                                                        )}
                                                                        {product.caracteristiqueBien?.superficieTotal && (
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
                                        {getPaginationPages().map((page, index) => (
                                            <li
                                                key={index}
                                                className={page === currentPage ? 'active' : ''}
                                            >
                                                {page === '...' ? (
                                                    <span>...</span>
                                                ) : (
                                                    <Link to="#" onClick={() => setCurrentPage(page)}>{page}</Link>
                                                )}
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopGridV1;
