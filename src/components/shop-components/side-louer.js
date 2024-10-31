import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
    handlePriceChange = (min, max) => {
        this.props.onPriceRangeChange(min, max);
    };
	
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
		<div className="col-lg-4  mb-100">
			<aside className="sidebar ltn__shop-sidebar">
			<h3 className="mb-30">Information Avancée</h3>
		
			{/* Advance Information widget */}
			<div className="widget ltn__menu-widget">
				<h4 className="ltn__widget-title">Type de bien	</h4>
				<ul>
				<li>
					<label className="checkbox-item">Appartement
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Villa
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Maison
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">Terrain
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
				<li>
					<label className="checkbox-item">Bureau
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">1,853</span>
				</li>
				<li>
					<label className="checkbox-item">Etage de villa
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">893</span>
				</li>
				<li>
					<label className="checkbox-item">Local commercial
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">950</span>
				</li>
				</ul>
				<hr />
				<h4 className="ltn__widget-title">Équipements</h4>
				<ul>
				<li>
					<label className="checkbox-item">Meublé 
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Climatisation 
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Chauffage Central
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">Terrasse
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
		
				</ul>
				<hr />
				<h4 className="ltn__widget-title">Plage de prix</h4>
				<ul>
				<li>
					<label className="checkbox-item">Tous
					<input type="checkbox" onChange={() => this.handlePriceChange(0,10000000)} />
					<span className="checkmark" />
					</label>
				
				</li>
				<li>
					<label className="checkbox-item">Budget limité
					<input type="checkbox" onChange={() => this.handlePriceChange(300, 600)} />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">300DT - 600DT</span>
				</li>
				<li>
					<label className="checkbox-item">Moyen
					<input type="checkbox" onChange={() => this.handlePriceChange(600, 1500)}  />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">600DT- 1500DT</span>
				</li>
				<li>
					<label className="checkbox-item">Budget élevé
					<input type="checkbox" onChange={() => this.handlePriceChange(1500, Infinity)} />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">À partir de 1500DT</span>
				</li>
				</ul>
				<hr />
				{/* Price Filter Widget */}
				<div className="widget--- ltn__price-filter-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border---">Filter by price</h4>
				<div className="price_filter">
					<div className="price_slider_amount">
					<input type="submit" defaultValue="Your range:" /> 
					<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
					</div>
					<div className="slider-range" />
				</div>
				</div>
				<hr />
				<h4 className="ltn__widget-title pt-30 ">Lits/Salles de bains</h4>
				<ul>
				<li>
					<label className="checkbox-item">Seul
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Double
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">jusqu'à 3
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">jusqu'à 5
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
				</ul>
				<hr />
				
			</div>
		
		
			</aside>
		</div>
    )
  }
}

export default Sidebar;
