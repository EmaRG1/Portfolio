import { Box, Typography } from '@mui/material'
import React from 'react'

export const Projects = () => {
  return (
    <Box sx={{ padding: { xs: '8rem 0', md: '15rem 0' }, backgroundColor: '#f9f9f9' }}>
      <Box sx={{
        margin: '0 auto',
        maxWidth: '107rem',
        padding: '0 4rem',
      }}>

        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: '#2d2e32',
            fontSize: '2.6rem',
            textAlign: 'center',
            fontWeight: '700'
          }}>New projects coming soon..🤠
        </Typography>
      </Box>
    </Box >
  )
}
