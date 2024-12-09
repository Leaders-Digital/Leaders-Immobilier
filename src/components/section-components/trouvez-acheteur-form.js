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
  InputAdornment,
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Phone,
  AttachMoney,
  LocationCity,
  Home,
  Category,
} from '@mui/icons-material';
import stateMunicipalities from '../shop-components/state-municipality.json';

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

  const [delegations, setDelegations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'ville') {
      const selectedVille = stateMunicipalities.find(
        (ville) => ville.Name === value
      );
      setDelegations(selectedVille ? selectedVille.Delegations : []);
      setFormData((prev) => ({
        ...prev,
        delegation: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data being sent:', formData);

    const url = `${process.env.REACT_APP_API_URL}api/acheteur/biens`;
    const headers = {
      Authorization: 'jkaAVXs852ZPOnlop795',
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(url, formData, { headers });
      if (response.status === 200) {
        setResponseMessage(response.data.message);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Error submitting form. Please try again later.');
      setIsSubmitted(true);
    }
  };

  const iconColor = { color: '#059AD7' };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Trouver un acheteur pour votre bien
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Grâce à notre large clientèle, Leaders Immobilier vous aide à
            trouver rapidement le bon acheteur pour votre bien immobilier,
            garantissant une vente réussie.
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle sx={iconColor} />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle sx={iconColor} />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone sx={iconColor} />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email sx={iconColor} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="categorieBiens-label">
                    Catégorie de bien
                  </InputLabel>
                  <Select
                    label="Catégorie de bien"
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

MenuProps={{
  PaperProps: {
    style: {
      position: 'absolute',
      top: 'auto',
      bottom: '0',
      maxHeight: '200px',
      overflowY: 'auto',
    },
  },
}}


                    label="Type de bien"
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
                    <MenuItem value="local-commercial">
                      Local commercial
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="ville-label">Ville</InputLabel>
                  <Select

MenuProps={{
  PaperProps: {
    style: {
      position: 'absolute',
      top: 'auto',
      bottom: '0',
      maxHeight: '200px',
      overflowY: 'auto',
    },
  },
}}


                    label="Ville"
                    name="ville"
                    value={formData.ville}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    {stateMunicipalities.map((ville) => (
                      <MenuItem key={ville.Value} value={ville.Name}>
                        {ville.Name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="delegation-label">Délégation</InputLabel>
                  <Select

MenuProps={{
  PaperProps: {
    style: {
      position: 'absolute',
      top: 'auto',
      bottom: '0',
      maxHeight: '200px',
      overflowY: 'auto',
    },
  },
}}


                    label="Délégation"
                    name="delegation"
                    value={formData.delegation}
                    onChange={handleInputChange}
                    disabled={!delegations.length}
                  >
                    <MenuItem value="">Sélectionnez</MenuItem>
                    {delegations.map((delegation) => (
                      <MenuItem key={delegation.Value} value={delegation.Value}>
                        {delegation.Name}
                      </MenuItem>
                    ))}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AttachMoney sx={iconColor} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box mt={4} textAlign="center">
              <Button className="theme-btn-1 btn" type="submit">
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
