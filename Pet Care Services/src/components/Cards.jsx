import React from 'react'
import { Link } from 'react-router-dom'
import { datosCards } from '../data/data'
import { Cards1, DivFoto } from '../styles/cards'

const Cards = () => {


    return (
        <>{
            datosCards.map((element) =>
                <Cards1>
                    <DivFoto>
                        <img src={element.image} alt='' />
                    </DivFoto>
                    <div>
                        <h3>{element.title}</h3>
                        <p>{element.text}</p>
                        <Link to={`/${element.id}`}>Informacion</Link>
                    </div>
                </Cards1>
            )
        }

        </>
    )
}

export default Cards
