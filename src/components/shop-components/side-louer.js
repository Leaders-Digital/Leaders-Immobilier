import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Sidebar = ({ onPriceRangeChange, onTypeChange, onStateChange , onRoomsChange}) => {
    const [selectedType, setSelectedType] = useState('Tous');
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]); 
    const [selectedState, setSelectedState] = useState('Tous');
    const [selectedRooms, setSelectedRooms] = useState(null); // New state for rooms filter

    const handlePriceChange = (range) => {
        setSelectedPriceRange(range);
        onPriceRangeChange(range[0], range[1]);
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
        onTypeChange(type); 
        
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
        onStateChange(state);  
    };


    const handleRoomsChange = (rooms) => { 
        setSelectedRooms(rooms);
        onRoomsChange(rooms); 
    };


    return (
        <div className="col-lg-4 mb-100">
            <aside className="sidebar ltn__shop-sidebar">
                <h3 className="mb-30">Information Avancée</h3>

                {/* Property Type Filter */}
                <div className="widget ltn__menu-widget">
                    <h4 className="ltn__widget-title">Type de bien</h4>
                    <ul>
                        {['Tous', 'Appartement', 'Villa', 'Maison',/* 'Terrain'*/, 'Bureau', 'Etage de villa', 'Local commercial'].map((type) => (
                            <li key={type}>
                                <label className="radio-item">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        checked={selectedType === type}
                                        onChange={() => handleTypeChange(type)}
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

                    {/* State Filter */}
                    <h4 className="ltn__widget-title">Ville :</h4>
                    <div className="dropdown short-by text-center  mb-5">
            <button 
        className="nice-select d-flex justify-content-between align-items-center" 
        type="button" 
        id="dropdownMenuButton" 
        data-bs-toggle="dropdown" 
        aria-expanded="false" 
        style={{ 
            border: '1px solid #EDEDED', 
            borderRadius: '0.25rem', 
            padding: '1.5rem 3rem' 
        }}
    >
        <span>{selectedState}</span>
       
    </button>

                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                            {['Tous', 'Nabeul', 'Sousse', 'Sfax'].map((state) => (
                                <li key={state}>
                                    <label className="dropdown-item ">
                                        <input
                                            type="radio"
                                            name="state"
                                            value={state}
                                            checked={selectedState === state}
                                            onChange={() => handleStateChange(state)}
                                             style={{ display: 'none' }} 
                                        />
                                        {state}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr />


                    {/* Additional Amenities Filter */}
                    <h4 className="ltn__widget-title mt-65">Équipements</h4>
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

<h4 className="ltn__widget-title pt-30">Nombre de chambres</h4>
<ul>
    <li>
        <label className="radio-item">
            <input
                type="radio"
                name="bedroomCount"
                value="1"
                checked={selectedRooms === 1}
                onChange={() => handleRoomsChange(1)}
            />
            Seul (1 chambre)
            <span className="checkmark" />
        </label>
    </li>
    <li>
        <label className="radio-item">
            <input
                type="radio"
                name="bedroomCount"
                value="2"
                checked={selectedRooms === 2}
                onChange={() => handleRoomsChange(2)}
            />
            Double (2 chambres)
            <span className="checkmark" />
        </label>
    </li>
    <li>
        <label className="radio-item">
            <input
                type="radio"
                name="bedroomCount"
                value="3-5"
                checked={selectedRooms?.[0] === 3 && selectedRooms?.[1] === 5}
                onChange={() => handleRoomsChange([3, 5])}
            />
            Jusqu'à 5 chambres (3-5)
            <span className="checkmark" />
        </label>
    </li>
    <li>
        <label className="radio-item">
            <input
                type="radio"
                name="bedroomCount"
                value="5-10"
                checked={selectedRooms?.[0] === 5 && selectedRooms?.[1] === 10}
                onChange={() => handleRoomsChange([5, 10])}
            />
            Jusqu'à 10 chambres (5-10)
            <span className="checkmark" />
        </label>
    </li>
</ul>


                    <hr />
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
