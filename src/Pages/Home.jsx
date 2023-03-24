import styled from '@emotion/styled'
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Home = () => {

  
  const Img= styled("img")({
    width:200,
    height:"100%",
    objectFit:"cover",
    objectPosition:"center"


   })
  return (
    <Paper
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      overflow: "hidden",
      mt: 5,
    }}
  >
  
  <Img src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Clase Privada de Ingles Basica-Intermedio"/>
  <Box sx={{flexGrow:1 ,display:"grid",gap:1}} >
      <Typography variant="h5">Clase  privada</Typography>
      <Typography variant="body1"> 1hora</Typography>
       <Button variant="contained"> Reservar</Button>
  </Box>

  <Box sx={{mr:2}} component="p"> Precio S/28 </Box>
  
  
  </Paper>
     
  )
}

export default Home
