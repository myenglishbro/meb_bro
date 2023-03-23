
import {useState} from 'react'
import React from 'react'


const Lista = () => {

  const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);
  const [add, setAdd] = useState(6);

  const Agregar=(numero)=>{
    setAdd(add+1)
   setArrayNumero([...arrayNumero,add])
  }
  return (
    <div>
      <h2>Lista</h2>
      <button onClick={Agregar}>Agregar</button>

      {
        arrayNumero.map((numero,index)=>{
         return  <p key={index}>{numero}</p>
        })
      }
    </div>
  )
}

export default Lista;
