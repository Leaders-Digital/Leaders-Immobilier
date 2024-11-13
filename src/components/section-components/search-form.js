import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const SearchForm = () => {
  // State hooks for each dropdown
  const [type, setType] = useState('');
  const [ville, setVille] = useState('');
  const [typeCategorie, setTypeCategorie] = useState('');

  const navigate = useNavigate();  // Hook to programmatically navigate

  // Handlers to update state when dropdown values change
  const handleTypeChange = (event) => setType(event.target.value);
  const handlevilleChange = (event) => setVille(event.target.value);
  const handlePropertyTypeChange = (event) => setTypeCategorie(event.target.value);

  // Form submission handler
  const handleSearch = (e) => {
    e.preventDefault();
	console.log("Search Params:", { type, ville, typeCategorie }); 

    // Navigate to /vente with the selected values in the state
    navigate('/vente', {
      state: {
        type,
        ville,
        typeCategorie
      }
    });
	 window.location.reload();
  };

  

  return (
    <div className="ltn__car-dealer-form-area mt--65 mt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__car-dealer-form-tab">
              <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
                <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                  <div className="car-dealer-form-inner">
                    <form onSubmit={handleSearch} className="ltn__car-dealer-form-box row">
                      <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">

						
                        <FormControl fullWidth>
                          <InputLabel>Type</InputLabel>
                          <Select value={type}  onChange={handleTypeChange}       >
                            <MenuItem value="Vente">Vente</MenuItem>
                            <MenuItem value="Location annuelle">Location annuelle</MenuItem>
                            <MenuItem value="Location estival">Location estival</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
               
                      <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                        <FormControl fullWidth>
                          <InputLabel>Type de bien</InputLabel>
                          <Select value={typeCategorie} onChange={handlePropertyTypeChange} MenuProps={{
            PaperProps: {
                style: {
                    position: 'absolute',
                    top: 'auto', 
                    bottom: '0',  
                    maxHeight: '200px', 
                    overflowY: 'auto'   
                }
            }
        }}>
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

					  <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                        <FormControl fullWidth>
                          <InputLabel>Ville</InputLabel>
                          <Select value={ville} onChange={handlevilleChange} MenuProps={{
            PaperProps: {
                style: {
                    position: 'absolute',
                    top: 'auto', 
                    bottom: '0',  
                    maxHeight: '200px', 
                    overflowY: 'auto'   
                }
            }
        }}> 
					         <MenuItem value="">Ville</MenuItem>
                                                    <MenuItem value="ariana">Ariana</MenuItem>
                                                    <MenuItem value="beja">Béja</MenuItem>
                                                    <MenuItem value="tunis">Tunis</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                        <div className="btn-wrapper text-center mt-0 go-top">
                          <Button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">
                            Recherche
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
