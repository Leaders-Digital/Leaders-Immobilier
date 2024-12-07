import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Paper,
  Box,
} from '@mui/material';

const TrouverAcheteurForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    categorieBiens: '',
    typebiens: '',
    ville: '',
    delegation: '',
    prix: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
	e.preventDefault();
  
	console.log("Form data being sent:", formData);
  
	const url = `${process.env.REACT_APP_API_URL}api/acheteur/biens`;
	const headers = {
	  'Authorization': 'jkaAVXs852ZPOnlop795',
	  'Content-Type': 'application/json',
	};
  
	try {
	  const response = await axios.post(url, formData, { headers });
	  console.log("Axios response:", response);
  
	  if (response.status === 200) {
		setResponseMessage(response.data.message);
		setIsSubmitted(true);
	  }
	} catch (error) {
	  console.error("Error submitting form:", error);
	  setResponseMessage('Error submitting form. Please try again later.');
	  setIsSubmitted(true);
	}
  };
  

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Trouver un acheteur pour votre bien
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Grâce à notre large clientèle, Leaders Immobilier vous aide à trouver rapidement le bon acheteur pour
            votre bien immobilier, garantissant une vente réussie.
          </Typography>
        </Box>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nom"
                  name="nom"
            
                  fullWidth
                  required
                  value={formData.nom}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prénom"
                  name="prenom"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.prenom}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Téléphone"
                  name="tel"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.tel}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="categorieBiens-label">Catégorie de bien</InputLabel>
                  <Select
                    labelId="categorieBiens-label"
                    name="categorieBiens"
                    value={formData.categorieBiens}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    <MenuItem value="bâtiment">Bâtiment</MenuItem>
                    <MenuItem value="Terrain">Terrain</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="typebiens-label">Type de bien</InputLabel>
                  <Select
                    labelId="typebiens-label"
                    name="typebiens"
                    value={formData.typebiens}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    <MenuItem value="Appartement">Appartement</MenuItem>
                    <MenuItem value="villa">Villa</MenuItem>
                    <MenuItem value="maison">Maison</MenuItem>
                    <MenuItem value="terrain">Terrain</MenuItem>
                    <MenuItem value="bureau">Bureau</MenuItem>
                    <MenuItem value="etage">Étage de villa</MenuItem>
                    <MenuItem value="local-commercial">Local commercial</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="ville-label">Ville</InputLabel>
                  <Select
                    labelId="ville-label"
                    name="ville"
                    value={formData.ville}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    <MenuItem value="ariana">Ariana</MenuItem>
                    <MenuItem value="ben-arous">Ben Arous</MenuItem>
                    <MenuItem value="manouba">Manouba</MenuItem>
                    <MenuItem value="nabeul">Nabeul</MenuItem>
                    <MenuItem value="Tunis">Tunis</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="delegation-label">Délégation</InputLabel>
                  <Select
                    labelId="delegation-label"
                    name="delegation"
                    value={formData.delegation}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    <MenuItem value="la-soukra">La Soukra</MenuItem>
                    <MenuItem value="L AOUINA">L Aouina</MenuItem>
                    <MenuItem value="le-kram">Le Kram</MenuItem>
                    <MenuItem value="la-marsa">La Marsa</MenuItem>
                    <MenuItem value="Lac 1">Lac 1</MenuItem>
                    <MenuItem value="lac 2">Lac 2</MenuItem>
                    <MenuItem value="hammamet">Hammamet</MenuItem>
                    <MenuItem value="hammamet-centre">Hammamet Centre</MenuItem>
                    <MenuItem value="mrezga">Mrezga</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Prix de vente"
                  name="prix"
                  type="number"
             
                  fullWidth
                  value={formData.prix}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Box mt={4} textAlign="center">
              <Button variant="contained" color="primary" type="submit" size="large">
                Envoyer
              </Button>
            </Box>
          </form>
        ) : (
          <Box textAlign="center">
            <Typography variant="h5" color="primary">
              {responseMessage}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default TrouverAcheteurForm;
