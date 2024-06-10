import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export const AboutMe = () => {
  return (
    <Box
      id='about'>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15rem 0',
        }}>
        <Stack
          spacing={7}
          flexDirection={{ sm: 'column', md: 'row' }}
          useFlexGap
          sx={{
            maxWidth: '107rem',
            margin: '0 auto',
            padding: '0 4rem'
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 'auto', md: '32rem' },
              width: { xs: '90%', md: '40rem' },
              borderRadius: '10px',
              margin: '0 auto'
            }}
            alt="The house from the offer."
            src="https://cdn.pixabay.com/photo/2016/06/08/10/35/laptop-1443559_640.jpg"
          />
          <Stack
            spacing={2}
            justifyContent='center'
            maxWidth={{ sm: '54rem' }}
          >
            <Typography
              component="span"
              variant='h3'
              sx={{
                fontWeight: '700',
                color: '#147efb',
                fontSize: '1.7rem',
                textAlign: { xs: 'center', md: 'left' }
              }}>
              ABOUT ME
            </Typography>
            <Typography
              sx={{
                color: '#2d2e32',
                fontWeight: '800',
                fontSize: '2.5rem',
                textAlign: { xs: 'center', md: 'left' }
              }}>
              Front-end Developer based in Tucuman, Argentina 📍
            </Typography>
            <Typography
              sx={{
                color: '#767676',
                fontWeight: '500',
                fontSize: '1.5rem',
                lineHeight: '1.5',
                textAlign: { xs: 'center', md: 'justify' }
              }}>
              Hey, my name is Emanuel, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React/Next.js in combination with Material UI and TypeScript.
            </Typography>

          </Stack>

        </Stack>

      </Container>

    </Box>
  )
}
