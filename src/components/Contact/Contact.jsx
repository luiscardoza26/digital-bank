import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Dialog,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.default', transition: 'background-color 0.3s ease' }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography variant="h2" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta o información adicional.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <ContactInfo>
                <Email color="primary" sx={{ mr: 2 }} />
                <Typography>contacto@bancodigital.com</Typography>
              </ContactInfo>
              <ContactInfo>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Typography>+34 900 123 456</Typography>
              </ContactInfo>
              <ContactInfo>
                <LocationOn color="primary" sx={{ mr: 2 }} />
                <Typography>Calle Principal 123, Madrid, España</Typography>
              </ContactInfo>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        
        <Dialog
          open={showSuccess}
          onClose={() => setShowSuccess(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              p: 4
            }
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center' 
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <svg width="0" height="0">
                  <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1976d2" />
                    <stop offset="100%" stopColor="#9c27b0" />
                  </linearGradient>
                </svg>
                <CheckCircleIcon 
                  sx={{ 
                    fontSize: 100,
                    mb: 3,
                    fill: "url(#linearColors)"
                  }}
                />
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 600
                }}
              >
                ¡Mensaje Enviado!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
                Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted 
                lo antes posible.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <Button
                variant="contained"
                sx={{ 
                  mt: 4,
                  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1565c0, #7b1fa2)',
                  }
                }}
                onClick={() => setShowSuccess(false)}
              >
                Aceptar
              </Button>
            </motion.div>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Contact;