import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  Paper,
  TextField,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Pages', path: '#' },
    { text: 'Departments', path: '/departments' },
    { text: 'Doctors', path: '/doctors' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif', bgcolor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="fixed" sx={{ bgcolor: 'whitesmoke', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo & Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: 100, height: 70, borderRadius: 50, marginRight: 15 }} />
            <Box>
              <Typography variant="h6" sx={{ color: '#3dbbd4', fontSize: '1.2rem' }}>TAU HOSPITAL</Typography>
              <Typography variant="caption" sx={{ color: '#777', fontSize: '0.8rem' }}>
                CARE, COMPASSION and CURE
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navLinks.map((item) => (
              <Button key={item.text} component={Link} to={item.path} sx={{ color: '#100c0c', '&:hover': { color: '#7bb2d1' } }}>
                {item.text}
              </Button>
            ))}
            <Box sx={{ ml: 3 }}>
              <Button component={Link} to="/sign-in" sx={{ color: '#100c0c' }}>Sign In</Button>
              <Typography component="span" sx={{ px: 1 }}>|</Typography>
              <Button component={Link} to="/sign-up" sx={{ color: '#100c0c' }}>Sign Up</Button>
            </Box>
            <Box sx={{ ml: 3 }}>
              <Button
                component={Link}
                to="/book-appointment"
                sx={{
                  color: '#33a2b8',
                  fontSize: 16,
                  textDecoration: 'none',
                  '&:hover': { color: '#53aabc' },
                }}
              >
                Book Appointment
              </Button>
            </Box>
          </Box>

          {/* Mobile Menu */}
          <IconButton sx={{ display: { md: 'none' } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem>
            <Button component={Link} to="/sign-in">Sign In</Button>
            <Typography sx={{ px: 1 }}>|</Typography>
            <Button component={Link} to="/sign-up">Sign Up</Button>
          </ListItem>
          <ListItem>
            <Button
              component={Link}
              to="/book-appointment"
              sx={{
                color: '#33a2b8',
                fontSize: 16,
                '&:hover': { color: '#53aabc' },
              }}
            >
              Book Appointment
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ mt: 14 }}>
        <Paper elevation={3} sx={{ display: 'flex', p: 3, alignItems: 'center', gap: 3 }}>
          <img src={logo} alt="Hospital" style={{ width: 120, height: 120, borderRadius: 10 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5">TAU Hospital</Typography>
            <Typography variant="subtitle1">Dedicated to Care, Driven by Compassion</Typography>
            <Typography variant="body2">
              Feel free to reach out to us for appointments, inquiries, or more
              information. Your health is our priority!
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: '#fefeff', mt: 8, p: 4 }}>
        <Grid container spacing={4} sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: 'black' }}>Contact Info</Typography>
            <Typography sx={{ color: 'black' }}><PhoneIcon /> 044 22516097</Typography>
            <Typography sx={{ color: 'black' }}><EmailIcon /> thmhospital002@democompany.com</Typography>
            <Typography sx={{ color: 'black' }}><LocationOnIcon /> Chennai</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Send a Message</Typography>
            <form>
              <TextField label="Email" fullWidth margin="normal" sx={{ mb: 2 }} />
              <TextField label="Message" fullWidth multiline rows={4} margin="normal" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
