import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';



export default function ButtonAppBar() {

  const [anchorNav, setAnchorNav] = React.useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const navlist = {
    color: '#2d2e32',
    fontWeight: '600',
    textTransform: 'none',
    fontSize: '2.7rem',
    ":hover": {
      color: '#147efb',
    }
  }


  return (
    <Box >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'white',
          boxShadow: '0 0 10px rgba(0, 0, 0, .09)',
          color: '#2d2e32',
          fontWeight: '600',
          height: '80px',
          justifyContent: 'center',
          padding: { xs: '25px 30px', md: '25px 40px 25px 50px' }
        }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: '700',
              fontSize: '2rem',
              cursor: 'pointer'
            }}>
            ERG.dev
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={openMenu}
            >
              <MenuIcon sx={{ fontSize: '3rem', color: "#2d2e32" }} />
            </IconButton>
            <Menu
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClose={closeMenu}
            >
              <MenuItem sx={{ fontSize: '1.5rem', fontWeight: '500' }} onClick={closeMenu} >
                <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.5rem', fontWeight: '500' }} onClick={closeMenu} >
                <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.5rem', fontWeight: '500' }} onClick={closeMenu}>
                <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.5rem', fontWeight: '500' }} onClick={closeMenu}>
                <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={navlist}>
              <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            </Button>
            <Button
              sx={navlist}>
              <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
            </Button>
            <Button
              sx={navlist}>
              <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
            </Button>
            <Button
              sx={navlist}>
              <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}