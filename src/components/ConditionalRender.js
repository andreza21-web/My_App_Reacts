import React, { useState } from 'react'

function ConditionalRender() {

    const [x] = useState(false);
    const [name, setName] = useState('João');
    return (
        <div>

            <h1>Componente ConditionalRender</h1>
            {x &&
                <h2>Isso sera exibido quando for true</h2>

            }
            {!x &&
                <h2>Sera exibido isso quando Falso</h2>
            }
            {
                name === 'Anna' ? (
                    <p>O nome é anna</p>
                ) : (
                    <p>Nome não encontrado!</p>
                )
            }
            {/* 
            Renderiza o componenente por meio do State
            */}
            <button onClick={() => setName('Anna')} >Clique aqui!</button>

        </div>
    )
}

export default ConditionalRender