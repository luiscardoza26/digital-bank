import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { Security, Speed, TouchApp, Payments } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'inline-flex',
  marginBottom: theme.spacing(2),
}));

const features = [
  {
    icon: <Security />,
    title: 'Máxima Seguridad',
    description: 'Protección avanzada con encriptación de última generación para todas tus transacciones.',
  },
  {
    icon: <Speed />,
    title: 'Velocidad',
    description: 'Transacciones instantáneas y procesamiento en tiempo real.',
  },
  {
    icon: <TouchApp />,
    title: 'Fácil de Usar',
    description: 'Interfaz intuitiva diseñada para una experiencia de usuario excepcional.',
  },
  {
    icon: <Payments />,
    title: 'Pagos Seguros',
    description: 'Sistema de pagos múltiples con confirmación instantánea.',
  },
];

const Features = () => {
  return (
    <Box id="features" sx={{ py: 8, bgcolor: 'background.section', transition: 'background-color 0.3s ease'  }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Typography variant="h2" gutterBottom>
            Características Principales
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Descubre por qué somos la mejor opción para tus finanzas
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <IconWrapper>
                    {React.cloneElement(feature.icon, { sx: { color: '#fff' } })}
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;