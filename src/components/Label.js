import React, { useState } from 'react'

const Label = () => {

    const [setResult] = useState('');


    return (
        <div>
            <input type="text" onChange={(e) => {
                  setResult(e.target.value);
            }}  />

        </div>

    )
}

export default Label