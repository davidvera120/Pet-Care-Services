import React from 'react'
import CardPet1 from './CardPet';
import NavBar1 from '../components/NavBar1';
import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet, CardBoard} from '../styles/PagIntro'
import { DivFoto } from '../styles/cards';

export const VistaMascota = () => {


  return (
   
    <div>
    
    
    <NavBar1 />
   
    <div className="col-12" Style="margin-top:20px">
    <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:20px;">
    <CardPet1 />
    </div>
    </div>
</div>


    
  )
}

export default VistaMascota