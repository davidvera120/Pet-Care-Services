import React from 'react'
import CardPet1 from './CardPet';
import NavBar2 from '../components/NavBar2';
import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet, CardBoard} from '../styles/PagIntro'
import FiltroCrud from "../components/FiltroCrud"


export const VistaMascota2 = () => {


  return (
   
    <div className="col-12">
   
    
    <NavBar2 />
   
    <div className="col-12" Style="margin-top:20px">
    <div className="container" Style="justify-content: center;aling-items:center; gap:20px;">
    <FiltroCrud />
    </div>
    </div>
</div>


    
  )
}

export default VistaMascota2