import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import NavBar from '../components/NavBar';
import { datosCards } from '../data/data'
import { CardDetalles, DivDetalles, IconoDetalle } from '../styles/Detalles';
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { Footer } from './Footer';

const SpaMascota = () => {

    const dataEscuela = datosCards.filter((datosCards => datosCards.id === "SpaMascota"));

    return (
        <div Style="margin-top:-30px">
            <NavBar />
            {
                dataEscuela.map((element) =>
                    <div>
                        <DivDetalles>
                            <h3>{element.title}</h3>
                            <p>{element.text2}</p>
                        </DivDetalles>
                    </div>
                )
            }
            {
                dataEscuela[0].textos.map((element) =>
                    <CardDetalles>
                        <IconoDetalle>
                            <FontAwesomeIcon icon={faSpa} />
                        </IconoDetalle>
                        <div>
                            <p>{element.texto}</p>
                        </div>
                    </CardDetalles>
                )
            }
            <Footer />
        </div>
    )
}

export default SpaMascota