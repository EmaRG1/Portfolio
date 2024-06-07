import React from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Hero from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { Box } from '@mui/material'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export const LandingPage = () => {
  return (
    <>
      <ButtonAppBar />
      <Hero />
      <Box>
        <AboutMe />
      </Box>
      <Projects />
      <Contact />
    </>
  )
}
