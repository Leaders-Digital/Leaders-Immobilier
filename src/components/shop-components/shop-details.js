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
				setSimilarProducts(response.data?.resultat?.slice(0, 3) || []);
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
    {product.caracteristiqueBien?.nbr_salle_bain && (
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




						<h4 className="title-2">localisation</h4>
						<div className="property-details-google-map mb-60">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.5755999114247!2d11.086171631258225!3d36.83885474574435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d3354eaddf7f3%3A0xb6c66ff6c6ef2045!2sAppartement%20Bensaid!5e0!3m2!1sfr!2stn!4v1730535085481!5m2!1sfr!2stn" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
						</div>
						<h4 className="title-2">Plans d'étage						</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
								<div className="nav">
									<a data-bs-toggle="tab" href="#liton_tab_3_1">Premier étage							</a>
									<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Deuxième étage</a>
								</div>
							</div>
							<div className="tab-content">
								<div className="tab-pane fade" id="liton_tab_3_1">
									<div className="ltn__apartments-tab-content-inner">
										<div className="row">
											<div className="col-lg-7">
												<div className="apartments-plan-img">
													<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
												</div>
											</div>
											<div className="col-lg-5">
												<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
													<h2>Premier étage	</h2>
													<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
														Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
														eiusmod tempor.Incididunt labore et dolore magna aliqua.
														sed ayd minim veniam.</p>
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="tab-pane fade active show" id="liton_tab_3_2">
									<div className="ltn__product-tab-content-inner">
										<div className="row">
											<div className="col-lg-7">
												<div className="apartments-plan-img">
													<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
												</div>
											</div>
											<div className="col-lg-5">
												<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
													<h2>Deuxième étage</h2>
													<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
														Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
														eiusmod tempor.Incididunt labore et dolore magna aliqua.
														sed ayd minim veniam.</p>
												</div>



											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liton_tab_3_3">
									<div className="ltn__product-tab-content-inner">
										<div className="row">
											<div className="col-lg-7">
												<div className="apartments-plan-img">
													<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liton_tab_3_4">
									<div className="ltn__product-tab-content-inner">
										<div className="row">
											<div className="col-lg-7">
												<div className="apartments-plan-img">
													<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
												</div>
											</div>
											<div className="col-lg-5">
												<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
													<h2>Top Garden</h2>
													<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
														Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
														eiusmod tempor.Incididunt labore et dolore magna aliqua.
														sed ayd minim veniam.</p>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="product-details-apartments-info-list  section-bg-1">
													<div className="row">
														<div className="col-lg-6">
															<div className="apartments-info-list apartments-info-list-color mt-40---">
																<ul>
																	<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
																	<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
																</ul>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="apartments-info-list apartments-info-list-color mt-40---">
																<ul>
																	<li><label>Belcony/Pets</label> <span>Allowed</span></li>
																	<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* APARTMENTS PLAN AREA END */}
						<h4 className="title-2">Vidéo de la propriété</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={`${process.env.REACT_APP_API_URL}${product.listImages?.[0]?.version_web}`}>
						<a
  className="ltn__video-icon-2 ltn__video-icon-2-border---"
  href={product.video ? product.video : "https://www.youtube.com/embed/3RcwJbTTaJs"}
  data-rel="lightcase"
>
  <i className="fa fa-play" />
</a>

						</div>
						<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
							<h4 className="title-2">Avis des clients</h4>
							<div className="product-ratting">
								<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
									<li><a href="#"><i className="far fa-star" /></a></li>
									<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
								</ul>
							</div>
							<hr />
							{/* comment-area */}
							<div className="ltn__comment-area mb-30">
								<div className="ltn__comment-inner">
									<ul>
										<li>
											<div className="ltn__comment-item clearfix">
												<div className="ltn__commenter-img">
													<img src={publicUrl + "assets/img/testimonial/1.png"} alt="Image" />
												</div>
												<div className="ltn__commenter-comment">
													<h6><a href="#">Adam Smit</a></h6>
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
															<li><a href="#"><i className="far fa-star" /></a></li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
													<span className="ltn__comment-reply-btn">September 3, 2024</span>
												</div>
											</div>
										</li>
										<li>
											<div className="ltn__comment-item clearfix">
												<div className="ltn__commenter-img">
													<img src={publicUrl + "assets/img/testimonial/1.png"} alt="Image" />
												</div>
												<div className="ltn__commenter-comment">
													<h6><a href="#">Adam Smit</a></h6>
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
															<li><a href="#"><i className="far fa-star" /></a></li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
													<span className="ltn__comment-reply-btn">September 2, 2024</span>
												</div>
											</div>
										</li>
										<li>
											<div className="ltn__comment-item clearfix">
												<div className="ltn__commenter-img">
													<img src={publicUrl + "assets/img/testimonial/2.jpg"} alt="Image" />
												</div>
												<div className="ltn__commenter-comment">
													<h6><a href="#">Adam Smit </a></h6>
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
															<li><a href="#"><i className="far fa-star" /></a></li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
													<span className="ltn__comment-reply-btn">September 1, 2024</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* comment-reply */}
							<div className="ltn__comment-reply-area ltn__form-box mb-30">
								<form action="#">
									<h4>Ajouter un avis</h4>
									<div className="mb-30">
										<div className="add-a-review">
											<h6>Vos notes :</h6>
											<div className="product-ratting">
												<ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
													{[1, 2, 3, 4, 5].map((star) => (
														<li key={star} style={{ cursor: 'pointer', marginRight: '5px' }}>
															<span onClick={() => setRating(star)}>
																<i className={star <= rating ? "fas fa-star" : "far fa-star"} />
															</span>
														</li>
													))}
												</ul>
											</div>
											{rating > 0}
										</div>
									</div>
									<div className="input-item input-item-textarea ltn__custom-icon">
										<textarea placeholder="Tapez vos commentaires...." defaultValue={""} />
									</div>
									<div className="input-item input-item-name ltn__custom-icon">
										<input type="text" placeholder="Tapez votre nom...." />
									</div>
									<div className="input-item input-item-email ltn__custom-icon">
										<input type="email" placeholder="Tapez votre email...." />
									</div>

									<div className="btn-wrapper">
										<button className="btn theme-btn-1" type="submit">Envoyer</button>
									</div>
								</form>
							</div>

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
												<li><span>{similarProduct.caracteristiqueBien.nbr_chambre}</span> Lits</li>
											)}
											{similarProduct.caracteristiqueBien?.nbr_salle_bain && (
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