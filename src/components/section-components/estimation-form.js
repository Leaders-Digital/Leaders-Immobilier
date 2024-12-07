import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Button,
  Typography,
  Paper,
  Box,
} from '@mui/material';

const EstimationForm = () => {
  const [formData, setFormData] = React.useState({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    propertyType: '',
    propertyCategory: '',
    propertyCity: '',
    delegation: '',
    agency: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Estimer la valeur de votre Bien
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Découvrez rapidement la valeur réelle de votre bien grâce à notre expertise et à des outils fiables. Simple, précis et gratuit !
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nom"
                name="lastname"
                variant="outlined"
                fullWidth
                required
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Prénom"
                name="firstname"
                variant="outlined"
                fullWidth
                required
                value={formData.firstname}
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
              <TextField
                label="Téléphone"
                name="phone"
                type="tel"
                variant="outlined"
                fullWidth
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="propertyType-label">Type de bien</InputLabel>
                <Select
                  labelId="propertyType-label"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Sélectionnez</MenuItem>
                  <MenuItem value="Appartement">Appartement</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Maison">Maison</MenuItem>
                  <MenuItem value="Terrain">Terrain</MenuItem>
                  <MenuItem value="Bureau">Bureau</MenuItem>
                  <MenuItem value="Etage de villa">Étage de villa</MenuItem>
                  <MenuItem value="Local commercial">Local commercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="propertyCategory-label">Catégorie de bien</InputLabel>
                <Select
                  labelId="propertyCategory-label"
                  name="propertyCategory"
                  value={formData.propertyCategory}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Sélectionnez</MenuItem>
                  <MenuItem value="Location">Location</MenuItem>
                  <MenuItem value="Vente">Vente</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="propertyCity-label">Ville</InputLabel>
                <Select
                  labelId="propertyCity-label"
                  name="propertyCity"
                  value={formData.propertyCity}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Sélectionnez</MenuItem>
                  <MenuItem value="Ariana">Ariana</MenuItem>
                  <MenuItem value="Ben Arous">Ben Arous</MenuItem>
                  <MenuItem value="Manouba">Manouba</MenuItem>
                  <MenuItem value="Nabeul">Nabeul</MenuItem>
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
                  <MenuItem value="La Soukra">La Soukra</MenuItem>
                  <MenuItem value="Le Kram">Le Kram</MenuItem>
                  <MenuItem value="La Marsa">La Marsa</MenuItem>
                  <MenuItem value="Lac 1">Lac 1</MenuItem>
                  <MenuItem value="Lac 2">Lac 2</MenuItem>
                  <MenuItem value="Hammamet">Hammamet</MenuItem>
                  <MenuItem value="Hammamet Centre">Hammamet Centre</MenuItem>
                  <MenuItem value="Mrezga">Mrezga</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="agency-label">Agence la plus proche</InputLabel>
                <Select
                  labelId="agency-label"
                  name="agency"
                  value={formData.agency}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Sélectionnez</MenuItem>
                  <MenuItem value="Lac 2">Agence Lac 2</MenuItem>
                  <MenuItem value="Kelibia">Agence Kelibia</MenuItem>
                  <MenuItem value="El Mrezga">Agence El Mrezga</MenuItem>
                  <MenuItem value="Hammamet">Agence Hammamet</MenuItem>
                  <MenuItem value="L'Aouina">Agence l'Aouina</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                name="message"
                placeholder="Entrez votre message"
                minRows={1}
                style={{ width: '100%' }}
                value={formData.message}
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
      </Paper>
    </Container>
  );
};

export default EstimationForm;
