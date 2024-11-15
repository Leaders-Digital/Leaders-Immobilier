import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductSliderV1 = () => {
    const [products, setProducts] = useState([]);
    const [type, setType] = useState('vente');
    const [itemPerPage, setItemPerPage] = useState(100);
    const [typeCategorie, setTypeCategorie] = useState("villa");



    const publicUrl = process.env.PUBLIC_URL + '/';

    useEffect(() => {
        const body = {
            type,
            itemPerPage,
            typeCategorie: [typeCategorie],
        }; 

        axios.post(`${process.env.REACT_APP_API_URL}api/v2/biens`, body, {
            headers: {
                Authorization: 'jkaAVXs852ZPOnlop795',
            },
        })
        .then((response) => {
            console.log(response.data.resultat);  
            const fetchedProducts = Array.isArray(response.data.resultat) ? response.data.resultat : [];
            
            
            const productsWithImages = fetchedProducts.filter(product => product.listImages?.[0]?.version_web !== null);

     
            setProducts(productsWithImages.slice(0, 4)); 
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            setProducts([]); 
        });
    }, [type]);


    return (
        <div>
            <div className="ltn__product-slider-area ltn__product-gutter pb-20 plr--7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color mt-30" style={{ padding: '10px 25px' }}>NOUVEAUTÉS</h6>
                                <h1 className="section-title">À Vendre</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1 d-flex flex-wrap">
                        {products.map(product => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                                <div className="ltn__product-item ltn__product-item-4 text-center---">
                                <div className="product-img go-top">
                                                                    <Link to={`/product-details/${product.id}`}>
                                                                        <img
                                                                            src={`${process.env.REACT_APP_API_URL}${product.listImages?.[0]?.version_web}`}
                                                                            onError={(e) => e.target.src = 'https://workingat.vu.nl/static/images/placeholder-image.jpg'}
                                                                        />
                                                                    </Link>
                                                            
                                                                    <div className="product-badge">
                                                                        <ul>
                                                                            <li className="sale-badge">{product.type}</li>
                                                                        </ul>
                                                                    </div>
                                                                   
                                        <div className="product-img-location-gallery">
                                            
                                            <div className="product-img-location">
                                                <ul>
                                                    <li>
                                                        <Link to="/contact"><i className="flaticon-pin" /> {product.ville}, {product.delegation}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-img-gallery go-top">
                                            <ul>
                                                    <li>
                <i className="fas fa-camera" /> {product.listImages?.length || 0}
                                                    </li>
                                                    <li>
                                                    <i className="fas fa-film" /> {product.listvideo?.length || 0}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-price">
                                            <span>{product.prixVente}<label>TND</label></span>
                                        </div>
                                        <h2 className="product-title">
                                                                        <Link to={`/product-details/${product.id}`}>{product.type_categorie} à {product.delegation}</Link>
                                                                    </h2>
                                        <div className="product-description">
                                            <p>{product.description}</p>
                                        </div>
                                        <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                            <li><span>{product.caracteristiqueBien.nbr_chambre} <i className="flaticon-bed" /></span> Lit</li>
                                            <li><span>{product.caracteristiqueBien.nbr_salle_bain} <i className="flaticon-clean" /></span> salles de bains</li>
                                            <li><span>{product.caracteristiqueBien.superficieTotal} <i className="flaticon-square-shape-design-interface-tool-symbol" /></span> carrés</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/vente" className="btn theme-btn-1 btn-effect-1 ">
                            Voir Plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default ProductSliderV1;
