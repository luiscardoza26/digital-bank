import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { getHeroImage } from '../../utils/images';
import RegisterModal from '../Common/RegisterModal';

const HeroSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  paddingTop: theme.spacing(8),
  transition: 'background 0.3s ease',
}));

const AnimatedImage = styled(motion.img)({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '18px',
  // border: '2px solid rgba(25, 118, 210, 0.3)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
});

const Hero = () => {
  const [openRegister, setOpenRegister] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HeroSection id="hero">
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Banca Digital Inteligente
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Descubre una nueva forma de gestionar tus finanzas con tecnología 
                de última generación y seguridad garantizada.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ mr: 2 }}
                  onClick={() => setOpenRegister(true)}
                >
                  Comenzar Ahora
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={scrollToContact}
                >
                  Saber Más
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedImage
              src={getHeroImage()}
              alt="Banking Digital Services"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [5, 3, 5] }}
              transition={{
                duration: 2,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <RegisterModal 
        open={openRegister} 
        onClose={() => setOpenRegister(false)} 
      />
    </HeroSection>
  );
};

export default Hero;