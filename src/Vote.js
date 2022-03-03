import React, { useState } from "react"

const Vote = () => {
    const [votar1, setVotar1] = useState(0);
    const [votar2, setVotar2] = useState(0);


    return (
        <div>
            <h1>Peli 1: {votar1}</h1>
            <h1>Peli 2: {votar2}</h1>
            <button onClick={() => setVotar1(votar1+1)} >
                Pelicula 1
            </button>
            <button onClick={() => setVotar2(votar2+1)} >
                Pelicula 2
            </button>
        </div>
    )
}

export default Vote