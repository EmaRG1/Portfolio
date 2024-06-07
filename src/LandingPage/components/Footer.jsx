import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2d2e32',
        padding: '5rem 0',
        width: '100%',
      }}
    >
      <Box sx={{
        margin: '0 auto',
        maxWidth: '107rem',
        padding: ' 0 4rem',
      }}>
        <Box sx={{
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: { xs: '2rem', md: 'none' },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography
            variant='h3'
            sx={{
              color: '#fff',
              fontSize: '1.7rem',
            }}
          >
            Copyright © 2024. All rights are reserved
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginTop: '1rem',
              color: '#fff'
            }}>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/emanuel-rojas-guindan/' sx={{ color: 'inherit' }}>
              <LinkedIn sx={{ fontSize: '32px', cursor: 'pointer', ":hover": { color: '#147efb' } }} />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://github.com/EmaRG1' sx={{ color: 'inherit' }}>
              <GitHub sx={{ fontSize: '32px', cursor: 'pointer', ":hover": { color: '#C9510C' } }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
