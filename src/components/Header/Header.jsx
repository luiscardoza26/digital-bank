import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { getLogo } from '../../utils/images';
import ThemeToggle from '../Common/ThemeToggle';
import MobileMenu from './MobileMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: 'none',
  transition: 'all 0.3s',
  '&.scrolled': {
    boxShadow: theme.shadows[3],
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of the fixed header
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              component="img" 
              src={getLogo()} 
              alt="Bank Logo" 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                height: 40,
                width: 'auto'
              }} 
              onClick={() => scrollToSection('hero')}
            />
          </motion.div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavButton onClick={() => scrollToSection('hero')}>
                Inicio
              </NavButton>
              <NavButton onClick={() => scrollToSection('services')}>
                Servicios
              </NavButton>
              <NavButton onClick={() => scrollToSection('features')}>
                Características
              </NavButton>
              <NavButton onClick={() => scrollToSection('testimonials')}>
                Testimonios
              </NavButton>
              <NavButton 
                variant="contained" 
                color="primary"
                onClick={() => scrollToSection('contact')}
              >
                Contacto
              </NavButton>
            </Box>
            <ThemeToggle />
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <MobileMenu />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;