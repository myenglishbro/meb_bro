
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Cursos = () => {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    
    >
       <CardActionArea>
       <CardMedia component="img"
        image="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=600"
        height="300"
        alt="curso1"
       >
       </CardMedia>

       <CardContent>
        <Typography variant="h5">Curso de Ingles</Typography>
        <Typography variant="body2"> Habilidades mentales para comprender cómo funciona el idioma y poder usarlo en cualquier situación. 
            Técnicas de pronunciación elementales que te harán hablar fluido y confiado. 
            Estructuras y habilidades del idioma para que te sientas seguro(a) y tranquilo(a) al comunicar lo que desees, sin preocuparte nunca más de pronunciar incorrectamente. </Typography>
       </CardContent>
       </CardActionArea>
       <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>


       </CardActions>

    </Card>
  )
}

export default Cursos
