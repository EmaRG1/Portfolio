import { Box, Typography } from '@mui/material'
import React from 'react'
import ProjectCard from './ProjectCard'
import {featuredProjects} from '../../data/featuredProjects'

export const Projects = () => {

  return (
    <Box sx={{  backgroundColor: '#f9f9f9'}}>
      <Box sx={{margin: '0 auto', maxWidth: '107rem', padding: '0 4rem 4rem 4rem'}}>

        <Typography variant='h2' sx={{ color: '#2d2e32', fontSize: '2.7rem', fontWeight: '700', marginBottom: '2rem' }}>
          Projects
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0, 1fr))' },
          margin: '0 auto',
          maxWidth: '107rem',
          gap: '1rem',
          //padding: '0 4rem',
          
        }}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

        </Box>
      </Box>
    </Box >
  )
}
