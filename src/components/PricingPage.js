// src/pages/PricingPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PricingPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="body1" paragraph>
          Here you can find our pricing plans and options. We offer a variety of plans to suit your needs.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Basic Plan
        </Typography>
        <Typography variant="body1" paragraph>
          Description of the Basic Plan.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Pro Plan
        </Typography>
        <Typography variant="body1" paragraph>
          Description of the Pro Plan.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Enterprise Plan
        </Typography>
        <Typography variant="body1" paragraph>
          Description of the Enterprise Plan.
        </Typography>
      </Box>
    </Container>
  );
};

export default PricingPage;
