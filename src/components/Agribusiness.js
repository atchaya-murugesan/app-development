// src/components/Agribusiness.js
import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, Button } from '@mui/material';

const Agribusiness = () => {
  const handleCardClick = (text) => {
    alert(`Clicked on: ${text}`);
  };

  return (
    <Container>
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Agriculture Business Insights
        </Typography>
        
        <Typography variant="h5" gutterBottom>
          Financial Assistance
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Agriculture Loans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore various loan options designed specifically for agricultural businesses to support your growth and operational needs.
                </Typography>
              </CardContent>
              <Button size="small" onClick={() => handleCardClick('Agriculture Loans')}>
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Subsidies and Grants
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find out about available subsidies and grants that can help reduce costs and enhance your agricultural ventures.
                </Typography>
              </CardContent>
              <Button size="small" onClick={() => handleCardClick('Subsidies and Grants')}>
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Investment Opportunities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore investment opportunities in the agricultural sector to expand and innovate your business.
                </Typography>
              </CardContent>
              <Button size="small" onClick={() => handleCardClick('Investment Opportunities')}>
                Learn More
              </Button>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 8 }}>
          <Typography variant="h5" gutterBottom>
            Business Ideas for Loan Arrangements
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Innovative Farming Techniques
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discover how innovative farming techniques can help you qualify for specialized loans and improve your crop yield.
                  </Typography>
                </CardContent>
                <Button size="small" onClick={() => handleCardClick('Innovative Farming Techniques')}>
                  Learn More
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Sustainable Agriculture Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn about sustainable agriculture projects that attract funding and support from various financial institutions.
                  </Typography>
                </CardContent>
                <Button size="small" onClick={() => handleCardClick('Sustainable Agriculture Projects')}>
                  Learn More
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Technology-Driven Agriculture
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore technology-driven agriculture initiatives that can enhance your business and attract financial support.
                  </Typography>
                </CardContent>
                <Button size="small" onClick={() => handleCardClick('Technology-Driven Agriculture')}>
                  Learn More
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Agribusiness;
