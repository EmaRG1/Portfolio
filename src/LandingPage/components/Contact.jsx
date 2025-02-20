import { Box, Typography } from '@mui/material'
import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const Contact = () => {
  return (
    <Box sx={{ padding: { xs: '8rem 0', md: '11rem 0'}, backgroundColor: '#f9f9f9' }}>
      <Box sx={{
        margin: '0 auto',
        maxWidth: '107rem',
        padding: '0 4rem',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box
            id='contact-title'
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography
              sx={{
                color: '#147efb',
                fontSize: '1.7rem',
                fontWeight: '700',
                marginBottom: '1rem',
              }}>
              CONTACT
            </Typography>
            <Typography
              variant='h4'
              sx={{
                color: '#2d2e32',
                fontSize: '2.5rem',
                fontWeight: '700'
              }}
            >Don't be shy! Hit me up! 👇</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: '5rem', md: ' 8rem' },
              marginTop: ' 6rem',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { xs: 'center', md: 'inherit' }
            }}
          >
            <Box sx={{
              alignItems: 'center',
              display: 'flex',
              gap: '1.5rem',
              flexDirection: { xs: 'column', md: 'row' }
            }}>
              <Box variant='span' sx={{
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
                color: '#147efb',
                display: 'flex',
                height: '5rem',
                justifyContent: ' center',
                width: '5rem',
              }}>
                <MapOutlinedIcon sx={{ fontSize: '30px' }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: ' 0.5rem',
              }}>
                <Typography
                  variant='h3'
                  sx={{
                    color: '#2d2e32',
                    fontSize: '1.7rem',
                    fontWeight: 'bold'
                  }}>
                  Location
                </Typography>
                <Typography sx={{
                  color: '#767676',
                  cursor: 'pointer',
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                  ":hover": {
                    color: '#147efb',
                  }
                }}>
                  Tucuman, Argentina
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              alignItems: 'center',
              display: 'flex',
              gap: '1.5rem',
              flexDirection: { xs: 'column', md: 'row' }
            }}>
              <Box variant='span' sx={{
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
                color: '#147efb',
                display: 'flex',
                height: '5rem',
                justifyContent: ' center',
                width: '5rem',
              }}>
                <MailOutlineOutlinedIcon sx={{ fontSize: '30px' }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: ' 0.5rem',
              }}>
                <Typography
                  variant='h3'
                  sx={{
                    color: '#2d2e32',
                    fontSize: '1.7rem',
                    fontWeight: 'bold'
                  }}>
                  Mail
                </Typography>
                <Typography sx={{
                  color: '#767676',
                  cursor: 'pointer',
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                  ":hover": {
                    color: '#147efb',
                  }
                }}>
                  emanuelrojasguindan@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
