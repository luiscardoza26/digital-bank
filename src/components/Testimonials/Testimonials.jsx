import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { testimonials } from '../../data/testimonials';

const TestimonialBox = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <Box id="testimonials" sx={{ py: 8, bgcolor: 'background.default', transition: 'background-color 0.3s ease' }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          data-aos="fade-up"
        >
          Lo que dicen nuestros clientes
        </Typography>
        <TestimonialBox
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar
                src={testimonials[currentIndex].image}
                sx={{ width: 120, height: 120, margin: '0 auto', mb: 3 }}
              />
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                "{testimonials[currentIndex].text}"
              </Typography>
              <Typography variant="h6" gutterBottom>
                {testimonials[currentIndex].name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {testimonials[currentIndex].position}
              </Typography>
            </motion.div>
          </AnimatePresence>
          <Box sx={{ mt: 4 }}>
            <IconButton onClick={handlePrev} color="primary">
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleNext} color="primary">
              <ArrowForward />
            </IconButton>
          </Box>
        </TestimonialBox>
      </Container>
    </Box>
  );
};

export default Testimonials;