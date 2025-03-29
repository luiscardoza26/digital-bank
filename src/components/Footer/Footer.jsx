import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => 
          theme.palette.mode === 'dark' 
            ? 'background.paper' 
            : '#f5f5f5', // Light gray background for light mode
        color: 'text.primary',
        py: 6,
        mt: 8,
        borderTop: (theme) => `1px solid ${
          theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(0, 0, 0, 0.12)'
        }`,
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sobre Nosotros
            </Typography>
            <Typography variant="body2">
              Somos tu banco digital de confianza, comprometidos con la innovación
              y la excelencia en servicios financieros.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#">Inicio</FooterLink>
              <FooterLink href="#">Servicios</FooterLink>
              <FooterLink href="#">Productos</FooterLink>
              <FooterLink href="#">Contacto</FooterLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" paragraph>
              Calle Principal 123
              <br />
              Madrid, España
              <br />
              Tel: +34 900 123 456
              <br />
              Email: contacto@bancodigital.com
            </Typography>
          </Grid>
        </Grid>
        
        <Divider 
          sx={{ 
            my: 4, 
            bgcolor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.1)'
          }} 
        />
        
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 2,
            color: (theme) =>
              theme.palette.mode === 'dark'
                ? 'text.secondary'
                : 'text.primary'
          }}
        >
          © {new Date().getFullYear()} Banco Digital. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;