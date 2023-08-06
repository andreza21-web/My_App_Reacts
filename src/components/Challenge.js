import React, { useState } from 'react'

const Challenge = () => {

  const [value1, setValue1] = useState(15);
  const [value2, setValue2] = useState(25); 

  const button = () => {
    const resultado = value1 + value2;
    console.log(resultado);

  }

   
    return (
        <div>
            <h1>Componente Challenge</h1>
            <p>Primeiro valor:{value1}</p>
            <p>Segundo valor: {value2}</p>
            
            <button onClick={button}>Soma</button>

        </div>

    )
}

export default Challenge