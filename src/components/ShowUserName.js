import React from 'react'

// {} destroctors
//  é uma destruturação de uma propriedade//
// o nome da propriedade deve ser igual a do props

const ShowUserName = ({name, age}) => {
  return (
    <div>
        <h1>Componente ShowUserName</h1>

        <h2>O nome do usuario é {name} e possui {age} anos</h2>

    </div>
  )
}

export default ShowUserName