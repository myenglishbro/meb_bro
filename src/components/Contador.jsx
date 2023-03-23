import React from 'react'
import { useState,Fragment } from 'react';
import {Button, Typography} from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Contador = () =>{

    const [numero,setNumero]=useState(0);

    const aumentar=()=>{
        setNumero(numero+1);
    }
    const disminuir=()=>{
        setNumero(numero-1);
    }


    return (
            <Fragment>
            <Typography variant="h3" component={"h2"}  textAlign={'center'} >Número de Estudiantes : {numero}</Typography>
            <Button variant= "contained" onClick={aumentar} startIcon={<AddCircleIcon/>} >Add </Button>
            <Button variant= "contained" onClick={disminuir} >Remove </Button>


            </Fragment>    );
}
export default Contador;