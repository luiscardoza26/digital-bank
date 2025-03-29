import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = ['Información Personal', 'Verificación', 'Finalizar'];

const RegisterModal = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 2000);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre completo"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Teléfono"
              margin="normal"
              variant="outlined"
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="DNI/NIE"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Dirección"
              margin="normal"
              variant="outlined"
            />
          </Box>
        );
      case 2:
        return (
          <Box 
            sx={{ 
              mt: 4, 
              mb: 4, 
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
                ¡Gracias por elegirnos!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
                Nos estaremos contactando con usted muy pronto para comenzar
                su experiencia bancaria personalizada.
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
                onClick={onClose}
              >
                Entendido
              </Button>
            </motion.div>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={!loading ? onClose : undefined}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 1
        }
      }}
    >
      <DialogTitle>
        {activeStep === steps.length - 1 ? '' : 'Crear Nueva Cuenta'}
      </DialogTitle>
      <DialogContent>
        {activeStep < steps.length - 1 && (
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {renderStepContent(activeStep)}
          </motion.div>
        </AnimatePresence>
      </DialogContent>
      {activeStep < steps.length - 1 && (
        <DialogActions>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Atrás
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
          >
            {activeStep === steps.length - 2 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default RegisterModal;