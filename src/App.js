import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingActionButton from './components/Common/FloatingActionButton';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import getTheme from './styles/theme';

function AppContent() {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode ? 'dark' : 'light');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </div>
    </ThemeProvider>
  );
};
function App() {
    return (
      <CustomThemeProvider>
        <AppContent />
      </CustomThemeProvider>
    );
}

export default App;