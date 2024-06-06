import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
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
              fontSize: '2rem'
            }}>
            ERG.dev
          </Typography>
          <Box>
            <Button
              sx={{
                color: '#2d2e32',
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1.7rem'
              }}>
              Home
            </Button>
            <Button
              sx={{
                color: '#2d2e32',
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1.7rem'
              }}>
              About
            </Button>
            <Button
              sx={{
                color: '#2d2e32',
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1.7rem'
              }}>
              Projects
            </Button>
            <Button
              sx={{
                color: '#2d2e32',
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1.7rem'
              }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>3
    </Box>
  );
}