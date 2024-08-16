import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const cardStyle = {
  minHeight: '400px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'black',
  textDecoration: 'none',
};

const backgroundImages = [
  'url(https://static.vecteezy.com/system/resources/previews/008/700/965/large_2x/hand-holding-young-plant-on-blur-green-nature-background-concept-eco-earth-day-free-photo.jpg)',
  'url(https://www.shutterstock.com/image-illustration/wooden-table-top-on-blur-600nw-2320763735.jpg)',
  'url(https://www.shutterstock.com/image-photo/workers-work-on-field-harvesting-260nw-1092045800.jpg)'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <Box sx={{ backgroundColor: '#c5e1a5', minHeight: '200vh', py: 8 }}>
      <Container maxWidth="100">
        <Box
          my={5}
          sx={{
            backgroundImage: backgroundImages[currentImage],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'black',
            textAlign: 'left',
            py: 20,
            px: 5,
            borderRadius: 20,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            transition: 'background-image 1s ease-in-out', 
            fontStyle: 'initial',     
          fontFamily:'revert-layer'     }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            SMART HARVEST
          </Typography>
          <Typography variant="h6" component="p" gutterBottom sx={{ lineHeight: 1.6 }}>
            Smart Harvest is an innovative agriculture platform dedicated to empowering farmers with cutting-edge technology and sustainable practices.
          </Typography>
          <Typography variant="h6" component="p" gutterBottom sx={{ lineHeight: 1.6 }}>
            Committed to the future of farming, Smart Harvest integrates data-driven insights and user-friendly applications for efficient farm management.
          </Typography>
          <Typography variant="h6" component="p" gutterBottom sx={{ lineHeight: 1.6 }}>
            Join us in transforming agriculture for a greener, more prosperous tomorrow.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={20} sm={8} md={6} style={{ display: 'flex' }}>
            <Link to="/agriculture" style={{ textDecoration: 'none', flexGrow: 1 }}>
              <Card sx={{ ...cardStyle, backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjObYpiATuosuOw6qlHBrGIC3q9pyMPJKcRjOWOWx88ceMVG84TmOkR6GN8XRO5YawZo&usqp=CAU)',borderRadius:20, }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    AGRICULTURE
                  </Typography>
                  <Typography variant="body2" component="p">          
                    Enhance your crop management with innovative tools.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={6} style={{ display: 'flex' }}>
          <Link to="/aquaculture" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Card sx={{ ...cardStyle, flexGrow: 1, backgroundImage: 'url(https://thehealthyfish.com/wp-content/uploads/2016/11/farmed-fish-vs-wild-caught.jpeg)',borderRadius:20, }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  AQUACULTURE
                </Typography>
                <Typography variant="body2" component="p">
                Enhance your fish management with precision tools.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
          <Link to="/apiculture" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Card sx={{ ...cardStyle, flexGrow: 1, backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/028/829/008/small_2x/honey-bees-on-honeycomb-in-apiary-in-summertime-honey-bees-communicate-with-each-other-ai-generative-free-photo.jpg)' ,borderRadius:20,}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  APICULTURE
                </Typography>
                <Typography variant="body2" component="p">
                Innovate with our advanced beekeeping solutions.                
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
          <NavLink to="/animalhusbandry" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Card sx={{ ...cardStyle, flexGrow: 1, backgroundImage: 'url(https://animalscience.care/wp-content/uploads/2015/12/cows-green-field_335224-509.webp)',borderRadius:20, }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  ANIMAL HUSBANDRY
                </Typography>
                <Typography variant="body2" component="p">
                Enhance livestock care with our smart solutions.
                </Typography>
              </CardContent>
            </Card>
            </NavLink>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
          <Link to="/plantsandsoil" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Card sx={{ ...cardStyle, flexGrow: 1, backgroundImage: 'url(https://static1.squarespace.com/static/54fbb611e4b0d7c1e151d22a/553d6c79e4b0bd2add1ae0a0/58e55cdb6b8f5bd081d96f2b/1691697505786/GettyImage%2C+soil+with+plant.jpg?format=1500w)',borderRadius:20, }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Plants and soil
                </Typography>
                <Typography variant="body2" component="p">
                Enhance soil health and optimize plant growth.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
          <Link to="/agribusiness" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Card sx={{ ...cardStyle, flexGrow: 1, backgroundImage: 'url(https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/Agricultural-Startups1--1-.jpg)',borderRadius:20, }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  AgriBusiness
                </Typography>
                <Typography variant="body2" component="p">
                  Plan and execute your harvest with ease.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
