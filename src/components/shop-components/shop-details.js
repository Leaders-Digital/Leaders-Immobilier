import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ShopDetails = () => {

	
	const [rating, setRating] = useState(0);


        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<Link to="#">À VENDRE</Link>
							</li>
							
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />May 19, 2021
							</li>
							
						</ul>
						</div>
						<h1>Appartement à KELIBIA</h1>
						<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> Kelibia , Tunisie</label>
						<h4 className="title-2">Description</h4>
						<p>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec
						Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
						quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas
						sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee
						iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
						<p>À gauche se trouve la cuisine moderne avec îlot central, menant à la salle familiale unique pour le petit-déjeuner dotée de murs en verre et de portes donnant sur le jardin et d'un accès à la buanderie séparée.						</p>
						<h4 className="title-2">Caractéristiques</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Référence :</label> <span>HZ29</span></li>
							<li><label>Superficie : </label> <span>80 m²</span></li>
							<li><label>Chambres :</label> <span>7</span></li>
							<li><label>Salles de bain :</label> <span>2</span></li>
							
						</ul>
						<ul>
							<li><label>Parking :</label> <span>0</span></li>
							<li><label>Etage :</label> <span>2</span></li>
							<li><label>Meublé :</label> <span>oui</span></li>
							<li><label>Statut de la propriété :</label> <span>à vendre
							</span></li>
							
						</ul>
						</div>
						
		
				
					
				
						<h4 className="title-2">Location</h4>
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
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/img-slide/1.png"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/3RcwJbTTaJs" data-rel="lightcase">
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
									<img src={publicUrl+"assets/img/testimonial/1.png"} alt="Image" />
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
									<img src={publicUrl+"assets/img/testimonial/2.png"} alt="Image" />
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
									<img src={publicUrl+"assets/img/testimonial/3.png"} alt="Image" />
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
                {rating > 0 }
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
						<h4 className="title-2">BIENS SIMILAIRES :</h4>
						<div className="row">
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/1.png"} alt="#" /></Link>
							
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">À VENDRE</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">Villa à LA SOUKRA</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Soukra, Tunisie</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Lits
								</li>
								<li><span>2 </span>
									Salles de bains
								</li>
								<li><span>3450 </span>
									Carrés
								</li>
								</ul>
							
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>349,000DT</span>
								</div>
							</div>
							</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/4.png"} alt="#" /></Link>
							
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">À VENDRE</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">Etage de villa à ENNASR</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Ariana, Tunisie</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Lits
								</li>
								<li><span>2 </span>
									Salles de bains
								</li>
								<li><span>3450 </span>
									Carrés
								</li>
								</ul>
								
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>349,000DT</span>
								</div>
							</div>
							</div>
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
							<input type="text" name="référence" placeholder="HZ29" disabled/>
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
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
        }


export default ShopDetails