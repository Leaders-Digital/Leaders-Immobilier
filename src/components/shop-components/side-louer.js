import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Sidebar = ({ onPriceRangeChange, onTypeChange,onStateChange  }) => {
    const [selectedType, setSelectedType] = useState('Tous');
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]); 
    const [selectedState, setSelectedState] = useState('Tous');

    const handlePriceChange = (range) => {
        setSelectedPriceRange(range);
        onPriceRangeChange(range[0], range[1]);
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
        onTypeChange(type); 
    };

	const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        onStateChange(state);  
    };

    return (
        <div className="col-lg-4 mb-100">
            <aside className="sidebar ltn__shop-sidebar">
                <h3 className="mb-30">Information Avancée</h3>

                {/* Property Type Filter */}
                <div className="widget ltn__menu-widget">
                    <h4 className="ltn__widget-title">Type de bien</h4>
                    <ul>
                        {['Tous', 'Appartement', 'Villa', 'Maison', 'Terrain', 'Bureau', 'Etage de villa', 'Local commercial'].map((type) => (
                            <li key={type}>
                                <label className="radio-item">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        checked={selectedType === type}
                                        onChange={() => handleTypeChange(type === 'All' ? 'all' : type)}
                                    />
                                    {type}
                                    <span className="checkmark" />
									
                                </label>
                            </li>
                        ))}
                    </ul>
                    <hr />

                    {/* Price Range Filter */}
                    <h4 className="ltn__widget-title">Plage de prix</h4>
                    <div>
                        <label>Plage de prix: {selectedPriceRange[0]} DT - {selectedPriceRange[1]} DT</label>
                        <Slider
                            range
                            min={0}
                            max={10000}
                            step={100}
                            value={selectedPriceRange}
                            onChange={handlePriceChange}
                        />
                    </div>

                    <hr />
					




                    {/* Additional Amenities Filter */}
                    <h4 className="ltn__widget-title">Équipements</h4>
                    <ul>    
                        <li>
                            <label className="checkbox-item">Meublé 
                                <input type="checkbox" defaultChecked />
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

                    {/* Bedroom/Bathroom Filter */}
                    <h4 className="ltn__widget-title pt-30">Lits/Salles de bains</h4>
                    <ul>
                        <li>
                            <label className="checkbox-item">Seul
                                <input type="checkbox" defaultChecked />
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
    );
};

export default Sidebar;
