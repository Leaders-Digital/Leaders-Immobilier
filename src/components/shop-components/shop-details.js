import React, { useEffect, useState,useRef  } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slick from 'react-slick';
                                                                                                                                                                                                                                                                                          
const ShopDetails = () => {
	const { id } = useParams(); // Get the product ID from URL
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [rating, setRating] = useState(0);  // State for rating moved here
	const publicUrl = process.env.PUBLIC_URL + '/';
	const [similarProducts, setSimilarProducts] = useState([]); // State for similar products

	

	const slickRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);


		const fetchProductDetails = async () => {
			setLoading(true);
			try {
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}api/v2/biens/detail`,
					{ id },
					{ headers: { Authorization: 'jkaAVXs852ZPOnlop795' } }
				);

				const productData = response.data?.resultat?.[0];
				if (productData) {
					setProduct(productData);
					fetchSimilarProducts(productData.type_categorie, productData.type); // Fetch similar products
					console.log(productData.type_categorie, productData.type);
					
				} else {
					console.error("No product data found.");
				}
			} catch (error) {
				console.error('Error fetching product details:', error);
			} finally {
				setLoading(false);
			}
		};

		const fetchSimilarProducts = async (type_categorie, type) => {
			try {
				const response = await axios.post(
					`${process.env.REACT_APP_API_URL}api/v2/biens`,
					{ type_categorie, type, exclude_id: id },
					{ headers: { Authorization: 'jkaAVXs852ZPOnlop795' } }
				);
				
				const fetchedProducts = response.data?.resultat || [];
				
				// Filter out products that don't have images
				const productsWithImages = fetchedProducts.filter(product => product.listImages?.[0]?.version_web !== null);
				
				setSimilarProducts(productsWithImages.slice(0, 3)); // Limit to 3 products
			} catch (error) {
				console.error('Error fetching similar products:', error);
			}
		};
		
		fetchProductDetails();
	}, [id]);

	const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
	

	if (loading) return <p>Loading...</p>;
	if (!product) return <p>Produits non trouvé</p>;

	return <div className="ltn__shop-details-area pb-10">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<div className="ltn__blog-meta">
							<ul>
								<li className="ltn__blog-category">
								<Link to="#">
    {product.type === 'Location annuelle'
        ? 'À LOUER'
        : product.type === 'Location estival'
        ? 'À LOUER'
        : 'À VENDRE'}
</Link>

								</li>
								<li className="ltn__blog-date">
									<i className="far fa-calendar-alt" /> {new Date(product.date_creation).toLocaleDateString()}
								</li>
							</ul>
						</div>
						<h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>{product.type_categorie} à {product.delegation}</span>
    <span className='ltn__secondary-color' style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>
        {product.prixVente} <label>TND</label>
    </span>
</h1>

						<label>
							<span className="ltn__secondary-color">
								<i className="flaticon-pin" />
							</span>
							{product.ville}, {product.delegation}
						</label>
						<h4 className="title-2">Description</h4>
						<p>{product.description}</p>
						<h4 className="title-2">Caractéristiques</h4>
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">
  <ul>
    {product.ref && (
      <li><i className="fa-solid fa-hashtag" /> <label>Référence :</label> <span>{product.ref}</span></li>
    )}
    {product.caracteristiqueBien?.superficieTotal && (
      <li><i className="fa-solid fa-ruler-combined" /> <label>Superficie :</label> <span>{product.caracteristiqueBien.superficieTotal} m²</span></li>
    )}
    {product.caracteristiqueBien?.nbr_chambre && (
      <li><i className="fa-solid fa-bed" /> <label>Chambres :</label> <span>{product.caracteristiqueBien.nbr_chambre}</span></li>
    )}
  {product.caracteristiqueBien?.nbr_salle_bain > 0 && (
  <li><i className="fa-solid fa-bath" /> <label>Salles de bain :</label> <span>{product.caracteristiqueBien.nbr_salle_bain}</span></li>
)}

  </ul>
  <ul>
    {product.caracteristiqueBien?.parking && (
      <li><i className="fa-solid fa-car" /> <label>Parking :</label> <span>{product.caracteristiqueBien.parking}</span></li>
    )}
    {product.caracteristiqueBien?.etage && (
      <li><i className="fa-solid fa-layer-group" /> <label>Etage :</label> <span>{product.caracteristiqueBien.etage}</span></li>
    )}
    {product.caracteristiqueBien?.meuble !== undefined && (
      <li><i className="fa-solid fa-couch" /> <label>Meublé :</label> <span>{product.caracteristiqueBien.meuble ? 'Oui' : 'Non'}</span></li>
    )}
    {product.type && (
      <li><i className="fa-solid fa-sign" /> <label>Statut de la propriété :</label> <span>{product.type}</span></li>
    )}
  </ul>
</div>





				
						{/* APARTMENTS PLAN AREA START */}
					


						{/* APARTMENTS PLAN AREA END */}





						<div
  className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
  style={{
	backgroundImage: `url(${product.listImages?.[0]?.version_web ? `${process.env.REACT_APP_API_URL}${product.listImages[0].version_web}` : 'https://workingat.vu.nl/static/images/placeholder-image.jpg'})`
   
  }}
>
  <a
    className="ltn__video-icon-2 ltn__video-icon-2-border---"
    href={product.video || "https://www.youtube.com/embed/3RcwJbTTaJs"}
    data-rel="lightcase"
  >
    <i className="fa fa-play" />
  </a>
</div>


					</div>



					
				</div>
				<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">


						{/* Form Widget */}
					 <div className="widget ltn__form-widget">
							<h4 className="ltn__widget-title ltn__widget-title-border-2">Contactez-nous à propos ce bien</h4>
							<form action="#">
								<input
									type="text"
									name="référence"
									value={product.ref || ''}
									placeholder={product.ref || 'Référence'}
									disabled
								/>
								<input type="text" name="name" placeholder="Nom Et Prénom *" />
								<input type="text" name="phone" placeholder="Téléphone *" />
								<input type="text" name="date" placeholder="Date *" />
								<input type="text" name="time" placeholder="Temps *" />
								<textarea name="yourmessage" placeholder="Écrire un message..." defaultValue={""} />
								<button type="submit" className="btn theme-btn-1">Envoyer</button>
							</form>
						</div>




						{/* Banner Widget */}
						<div className="widget ltn__banner-widget d-none go-top">
							<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>

					
				</div>
								
				<div className="ltn__shop-details-area pb-10">
			<div className="container">
				{/* Product details code here */}
				<h4 className="title-2">BIENS SIMILAIRES :</h4>
				<div className="row">
					{similarProducts.length > 0 ? (
						similarProducts.map((similarProduct) => (
							<div key={similarProduct.id} className="col-xl-4 col-md -6 col-12 go-top">
								<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
									<div className="product-img go-top">
										<Link to={`/product-details/${similarProduct.id}`}>
											<img 
												src={`${process.env.REACT_APP_API_URL}${similarProduct.listImages?.[0]?.version_web}`}
												onError={(e) => e.target.src = 'https://workingat.vu.nl/static/images/placeholder-image.jpg'} 
												alt={similarProduct.type_categorie}
											/>
										</Link>
									</div>
									<div className="product-info">
										<div className="product-badge">
											<ul>
												<li className="sale-badge">{similarProduct.type}</li>
											</ul>
										</div>
										<h2 className="product-title">
											<Link to={`/product-details/${similarProduct.id}`}>
												{similarProduct.type_categorie} à {similarProduct.delegation}
											</Link>
										</h2>
										<div className="product-img-location go-top">
											<ul>
												<li>
													<Link to="#"><i className="flaticon-pin" /> {similarProduct.ville}, {similarProduct.delegation}</Link>
												</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											{similarProduct.caracteristiqueBien?.nbr_chambre && (
												<li><span>{similarProduct.caracteristiqueBien.nbr_chambre}</span> Chambres</li>
											)}
										{similarProduct.caracteristiqueBien?.nbr_salle_bain > 0 && (
  <li><span>{similarProduct.caracteristiqueBien.nbr_salle_bain}</span> Salles de bains</li>
)}

											{similarProduct.caracteristiqueBien?.superficieTotal && (
												<li><span>{similarProduct.caracteristiqueBien.superficieTotal}</span> m²</li>
											)}
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="product-price">
											<span>{similarProduct.prixVente} <label>TND</label></span>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<p>Aucun bien similaire trouvé</p>
					)}
				</div>
			</div>
		</div>
			</div>
		</div>
	</div>
}


export default ShopDetails