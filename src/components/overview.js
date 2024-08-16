// src/pages/CropManagementOverview.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const cropManagementData = [
  {
    title: 'Precision Agriculture',
    description: 'Utilize technology to enhance crop management and increase yield through data-driven decisions.',
   image: 'https://agfundernews.com/wp-content/uploads/2019/05/iStock-898449496-768x512.jpg', // Replace with actual image URL
  },
  {
    title: 'Soil Health Monitoring',
    description: 'Regularly monitor soil conditions to ensure optimal crop growth and prevent nutrient deficiencies.',
    image: 'https://t3.ftcdn.net/jpg/02/98/49/46/360_F_298494603_0lLzYvxNuyJKdCwjjcqizQgIHgAHural.jpg', // Replace with actual image URL
  },
  {
    title: 'Irrigation Management',
    description: 'Implement efficient irrigation systems to conserve water and optimize crop hydration.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcgzPdfUwOiER8MjGYGufGKscqYUJnkYqdg&s', // Replace with actual image URL
  },
  {
    title: 'Pest and Disease Control',
    description: 'Adopt integrated pest management strategies to protect crops from pests and diseases.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfI9unx5Q-_sb_SUq-vzN3zYolJm3uL1tHoQ&s', // Replace with actual image URL
  },
];

const Overview = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Crop Management Overview
        </Typography>
        <Typography variant="body1" paragraph>
          Effective crop management is crucial for maximizing yields and maintaining the health of crops. The following areas are key to successful crop management:
        </Typography>
        <Grid container spacing={4}>
          {cropManagementData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Overview;
