import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";



export default function ButtonAppBar() {

  const [anchorNav, setAnchorNav] = React.useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const nav = (e) => {
      if (e.key === 'Enter') {
        const sectionId = e.target.textContent.toLowerCase();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }

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

        sx={{
          position:{md:'static'},
          bgcolor: 'white',
          boxShadow: 'none',
          color: '#2d2e32',
          fontWeight: '600',
          height: '80px',
          padding: '0 3rem',
          justifyContent: 'center',
          left: 0,
          right: 'auto',
          maxWidth: '107rem',
          margin: '0 auto',
         // padding: { xs: '25px 30px', md: '25px 40px 25px 50px' },

        }}>
        <Toolbar sx={{ justifyContent: 'space-between',}}>
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
              <MenuItem
                sx={{ fontSize: '2.5rem', fontWeight: '400' }}
                onClick={closeMenu}
                tabIndex={0}
                onKeyDown={nav}
              >
                <IoHome style={{ marginRight: '0.7rem', marginBottom: '0.1rem', fontSize: '1.6rem' }} />
                <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '2.5rem', fontWeight: '400' }}
                onClick={closeMenu}
                tabIndex={0}
                onKeyDown={nav}
              >
                <GrProjects style={{ marginRight: '0.7rem', marginBottom: '0.1rem', fontSize: '1.6rem' }}/>
                <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '2.5rem', fontWeight: '400' }}
                onClick={closeMenu}
                tabIndex={0}
                onKeyDown={nav}
              >
                <IoIosMail style={{ marginRight: '0.7rem', marginBottom: '0.1rem', fontSize: '1.6rem' }}/>
                <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={navlist}
              tabIndex={0}
              onKeyDown={nav}
            >
              <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            </Button>
            <Button
              sx={navlist}
              tabIndex={0}
              onKeyDown={nav}
            >
              <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
            </Button>
            <Button
              sx={navlist}
              tabIndex={0}
              onKeyDown={nav}
            >
              <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}