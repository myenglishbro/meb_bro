

import React,{Fragment,useState} from 'react'

function Formulario() {

    const [dato,setDatos]=useState({
     nombre:'',
     apellido:''

    })

    const HnadleInputChange=(e)=>{
      setDatos({
        ...dato,
        [e.target.name]:e.target.value,

      })
    }

    const enviarDatos = (e)=>{
      e.preventDefault();
      console.log(dato.nombre+" "+ dato.apellido)
    }

    
  return (
    <Fragment>
    <h1>Formulario Registro</h1>
         <form className='row ' onSubmit={enviarDatos}>
           <div className='col-md-3' >
           <input
            placeholder='Ingresa tu nombre'
            className='form-control'
            name='nombre'
            type='text'
            onChange={HnadleInputChange}
            autoFocus

           />
           </div>
           <div className='col-md-3'>
           <input
             placeholder='Ingresa tu apellido'
             className='form-control'
             name='apellido'
             type='text'
             onChange={HnadleInputChange}


           />
           </div>
           <div className='col-md-3 '>
            <button className='btn btn-primary' type='submit'>Enviar</button>        
   </div>
           
        </form>

        <h3>{dato.nombre} - {dato.apellido}</h3>
    </Fragment>
  )
}

export default Formulario
