import React from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Hero from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { Box } from '@mui/material'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export const LandingPage = () => {
  return (
    <div className='app'>
      <ButtonAppBar/>
      <Box id="home" sx={{overflowX: 'hidden'}}>
        <Hero />
      </Box>
      {/* <Box id="about">
        <AboutMe />
      </Box> */}
      <Box id="projects" sx={{overflowX: 'hidden'}}>
        <Projects />
      </Box>
      <Box id="contact" sx={{overflowX: 'hidden'}}>
        <Contact />
      </Box>
    </div>
  )
}
