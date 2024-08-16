import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Apiculture = () => {
    return (
        <Container
            sx={{
                backgroundColor: '#F4A300', // Brownish-yellow color
                minHeight: '100vh', // Ensure it covers the full viewport height
                padding: '20px', // Optional padding
            }}
        >
            <Typography
                variant="h2"
                sx={{ mb: 4 }} // marginBottom: theme.spacing(4)
                align="center"
            >
                Apiculture: The Art of Beekeeping
            </Typography>

            <section style={{ margin: '40px 0' }}> {/* margin: theme.spacing(5, 0) */}
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Typography paragraph>
                    Apiculture, or beekeeping, is the practice of maintaining bee colonies in hives by humans. Beekeepers keep bees for the production of honey, beeswax, and other products, and for the pollination of crops.
                </Typography>
            </section>

            <section style={{ margin: '40px 0' }}> {/* margin: theme.spacing(5, 0) */}
                <Typography variant="h4" gutterBottom>
                    Beekeeping Equipment
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345, m: 'auto', backgroundColor: '#FFD700' }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 200, objectFit: 'cover' }} // Adjust height and fit
                                image="https://www.beekeepinggear.com.au/cdn/shop/articles/Untitled_design_-_2022-06-20T205130.427_1600x.png?v=1668785646" // Replace with your image URL
                                title="Beekeeping Suit"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#000' }}>
                                    Beekeeping Suit
                                </Typography>
                                <Typography sx={{ color: '#000' }}>
                                    Essential for protecting yourself from bee stings while working with the hives.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345, m: 'auto', backgroundColor: '#FFD700' }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 200, objectFit: 'cover' }} // Adjust height and fit
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMec7mLtFz_posvjjMzHZEigwlT0tIbYeoxg&s" // Replace with your image URL
                                title="Bee Hive"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#000' }}>
                                    Bee Hive
                                </Typography>
                                <Typography sx={{ color: '#000' }}>
                                    The structure where bees live and produce honey.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345, m: 'auto', backgroundColor: '#FFD700' }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 200, objectFit: 'cover' }} // Adjust height and fit
                                image="https://previews.123rf.com/images/georgimironi/georgimironi1909/georgimironi190900008/136189879-photo-of-pumping-honey-from-bee-honeycombs-in-a-honey-extractor.jpg" // Replace with your image URL
                                title="Honey Extractor"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#000' }}>
                                    Honey Extractor
                                </Typography>
                                <Typography sx={{ color: '#000' }}>
                                    Used to extract honey from the combs without destroying them.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </section>

            <section style={{ margin: '40px 0' }}> {/* margin: theme.spacing(5, 0) */}
                <Typography variant="h4" gutterBottom>
                    Types of Honey
                </Typography>
                <Typography paragraph>
                    Honey comes in a variety of types depending on the nectar source, including clover, wildflower, and manuka honey. Each type has unique flavor profiles and potential health benefits.
                </Typography>
            </section>

            <section style={{ margin: '40px 0' }}> {/* margin: theme.spacing(5, 0) */}
                <Typography variant="h4" gutterBottom>
                    Benefits of Beekeeping
                </Typography>
                <Typography paragraph>
                    Beekeeping not only provides honey and other products but also supports biodiversity through pollination. Bees are crucial for the pollination of many plants, including fruits, vegetables, and flowers.
                </Typography>
            </section>

        </Container>
    );
};

export default Apiculture;
