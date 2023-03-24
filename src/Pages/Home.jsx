import styled from '@emotion/styled'
import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Home = () => {
  

 return (
  <Box
  sx={{
    backgroundImage: 'url(assets/img/jumping.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'red',
    color: 'white',
    position: 'relative',
    zIndex: 2,
    '&::after': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(245, 0, 87, 0.5)',
    zIndex: -1,
    },
    }}
    
 >
  <Box sx={{ maxWidth: '900px', textAlign: 'center' }}>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Únete a la comunidad de aprendizaje online en vivo más grande de Latinoamérica
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Clases online en vivo, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de estudiantes.
    </Typography>
    <Button href="https://wa.link/qwnf6w" variant="contained" sx={{ mr: 2 }}>
      Contactar
    </Button>
    <Button href="https://wa.link/qwnf6w" variant="contained">
      Grupo Wsp
    </Button>
  </Box>
</Box>
);
}
export default Home
