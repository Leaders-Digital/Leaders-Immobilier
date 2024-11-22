import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ShopGridV1 = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';

    const tunisiaAgencies = [
        {
            id: 1,
            title: 'Leaders Immobilier Les berges du lac ',
            imgSrc: 'assets/img/logo.png',
            location: 'Cité les Pins, En face clinique Hannibal, Tunis',
            phone: '27 246 301',
            link: '/about/lac', 
        },
        {
            id: 2,
            title: 'Leaders Immobilier Hammamet',
            imgSrc: 'assets/img/logo.png',
            location: 'Barreket sahel Manaret hammamet, 8056, Tunisie',
            phone: '27 246 301',
            link: '/about/hammamet',
        },
        {
            id: 3,
            title: 'Leaders Immobilier Mrezga',
            imgSrc: 'assets/img/logo.png',
            location: 'Rue Abu Dhabi 8050 Hammamet, Tunisie',
            phone: '27 246 309',
            link: '/about/mrezga',
        },
        {
            id: 4,
            title: 'Leaders Immobilier El Aouina',
            imgSrc: 'assets/img/logo.png',
            location: 'El Aouina, résidence RANIA , Tunis, 4216, Tunisie',
            phone: '27 246 321',
          
        },
        {
            id: 5,
            title: 'Leaders Immobilier Kélibia',
            imgSrc: 'assets/img/logo.png',
            location: 'Kélibia, Tunisia, 8090, Tunisie',
            phone: '27 246 316',
            link: '/about/kelibia',
        },
    ];

    const TunisiaFlag = 'assets/img/flags/tunisie.png';
    const ItalyFlag = 'assets/img/flags/italy.png';

    const italyAgency = {
        id: 6,
        title: 'Leaders Immobilier Milano',
        imgSrc: 'assets/img/logo.png',
        location: 'Via Accademia 22, Milan, Italie',
        phone: '+39 346 860 9857',
        link: '/about/milano',
    };

    const renderAgencyCard = (agency) => (
        <Grid item xs={12} sm={6} md={4} key={agency.id}>
            <Link to={agency.link} style={{ textDecoration: 'none' }}>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mb: 2,
                        boxShadow: 3,
                        paddingTop: 2,
                        paddingBottom: 2,
                        transition: 'transform 0.3s ease',  
                        '&:hover': {
                            transform: 'scale(1.02)',     
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={publicUrl + agency.imgSrc}
                        alt={agency.title}
                        sx={{ objectFit: 'cover', height: 120, width: 'auto', margin: '0 auto' }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center', lineHeight: '1.6' }}>
                            {agency.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', lineHeight: '1.6' }}>
                            <i className="flaticon-pin" /> {agency.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', lineHeight: '1.6' }}>
                            <i className="fa fa-phone" /> {agency.phone}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );

    return (
        <div className="product-area">
            <div className="container">
                {/* Tunisia Agencies */}
                <Grid container alignItems="center" sx={{ mb: 4 }}>
                    <Grid item>
                        <Typography variant="h4" sx={{ mr: 2 }}>
                            Agences en Tunisie
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={publicUrl + TunisiaFlag} alt="Tunisie Flag" width={50} />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {tunisiaAgencies.map(renderAgencyCard)}
                </Grid>

                {/* Italy Agencies */}
                <Grid container alignItems="center" sx={{ mt: 5, mb: 4 }}>
                    <Grid item>
                        <Typography variant="h4" sx={{ mr: 2 }}>
                            Agences en Italie
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={publicUrl + ItalyFlag} alt="Italy Flag" width={50} />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {renderAgencyCard(italyAgency)}
                </Grid>
            </div>
        </div>
    );
};

export default ShopGridV1;
