import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import me2 from '../../assets/images/me2.jpeg'

export default function Hero() {
  const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `morph 8s ${theme.transitions.easing.easeInOut} infinite`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '3px solid #2d2e32',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    height: '39rem',
    position: 'relative',
    transition: 'all 1s ease-in-out',
    width: '33rem',
    '@keyframes morph': {
      '0%': {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      '50%': {
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
      },
      '100%': {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  }));

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundColor: '#f9f9f9',
        height: { xs: 'auto', md: '100vh' },
        padding: { xs: '11rem 0', md: '0' }
      }}
    >
      <Container

        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          display: 'flex',
          gap: { xs: '3rem', md: '10rem' },
          justifyContent: 'center',
          position: 'relative',
          height: { xs: 'auto', md: '65rem', xl: '80rem' },
        }}
      >
        <Container
          sx={{
            maxWidth: 'content',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '3rem', md: '10rem' },
            position: 'relative'
          }}
        >
          <Stack
            useFlexGap
            sx={{
              width: { xs: '100%', sm: '70%' },
              maxWidth: '50rem'
            }}>
            <Typography
              variant="h1"
              sx={{
                color: '#2d2e32',
                fontWeight: '700',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                marginBottom: '2rem',
                marginTop: '2rem',
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '4rem', md: '5.5rem' },
              }}
            >
              Front-End React Developer
            </Typography>
            <Typography
              textAlign="center"
              color="#555"
              sx={{
                alignSelf: 'center',
                textAlign: { xs: 'center', md: 'left' },
                fontSize: '1.8rem',
                marginBottom: { xs: '5rem', md: '0' }
              }}
            >
              Hi, I'm Emanuel Rojas Guindan. A passionate Front-end React Developer based in Tucumán, Argentina 📍
            </Typography>
            <Stack direction='row'
              sx={{
                gap: { xs: '1.6rem', md: '1.3rem' },
                margin: { xs: '-2rem 0 4rem', md: '2.5rem 0' },
                justifyContent: { xs: 'center', md: 'left' },
                alignItems: 'center'
              }}>
              <LinkedIn sx={{ fontSize: '32px' }} />
              <GitHub sx={{ fontSize: '32px' }} />
            </Stack>
          </Stack>
          <AnimatedBox
            component="img"
            alt="The house from the offer."
            src={me2}
          />
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bottom: '0',
            marginLeft: { md: '20rem' },
            color: '#767676',
            width: '100%',
            position: { xs: 'static', md: 'absolute' },

          }}
        >
          <Typography
            sx={{
              borderBottom: { xs: '2px solid rgba(45, 46, 50, .5)', md: 'none' },
              borderRight: { xs: 'none', md: '2px solid rgba(45, 46, 50, .5)' },
              color: '#2d2e32',
              fontWeight: '600',
              marginBottom: { xs: '3rem', md: '0' },
              marginRight: { xs: '0', md: '7rem' },
              paddingRight: { xs: '0', md: '2rem' },
              paddingBottom: { xs: '1rem', md: '0' },
              fontSize: '1.7rem'
            }}
          >
            Tech Stack
          </Typography>
          <Stack direction='row'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '3rem',
                padding: 0,
                margin: 0,
                listStyle: 'none',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  alt="skill-icon"
                  src="https://skillicons.dev/icons?i=html,css"

                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  alt="skill-icon"
                  src="https://skillicons.dev/icons?i=js,ts"

                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  alt="skill-icon"
                  src="https://skillicons.dev/icons?i=react,next"

                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Container>
    </Box >
  );
}