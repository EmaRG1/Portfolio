import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {

  const navlist = {
    color: '#2d2e32',
    fontWeight: '600',
    textTransform: 'none',
    fontSize: '1.7rem',
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
          padding: '25px 40px 25px 50px'
        }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
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

          <Box>
            <Button
              component={Link}
              to={"/"}
              sx={navlist}>
              Home
            </Button>
            <Button
              component={Link}
              to={'/about'}
              sx={navlist}>
              About
            </Button>
            <Button

              sx={navlist}>
              Projects
            </Button>
            <Button

              sx={navlist}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}