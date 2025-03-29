import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { label: 'Inicio', section: 'hero' },
    { label: 'Servicios', section: 'services' },
    { label: 'Características', section: 'features' },
    { label: 'Testimonios', section: 'testimonials' },
    { label: 'Contacto', section: 'contact' },
  ];

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setOpen(false);
    }
  };

  return (
    <>
      <MenuButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </MenuButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
          }}
          role="presentation"
        >
          <IconButton
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
          <List sx={{ mt: 6 }}>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleNavigation(item.section)}
                sx={{
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;