import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet} from '../styles/PagIntro'

import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';

import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaPet} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import ModalEdit2 from './ModalEdit2';

export const CardPet1 = () => {

    const {id} = useSelector(state => state.login)
    console.log(id)
    const dispatch = useDispatch();
    const {Pet} = useSelector(state => state.read1)
    console.log(Pet)
    
    
    const deleteWorkout = async (id2) => {
      const docRef=doc(db, "data", id)
      const colRef=collection(docRef, "pet")     
      const workDoc = doc(colRef, id2)
      await deleteDoc(workDoc)
      dispatch( listaPet(id))
    }
    
    useEffect(() => {
      
    dispatch( listaPet(id))

},[dispatch])

  return (

   
    <div className="container d-flex flex-wrap">
   
  {
    Pet?.map(elemento =>(
    
  
    
        <CardPet>
                <div className="container d-flex" Style="justify-content:center;aling-items:center;flex-wrap:wrap;">

                    <div className="col">
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">

                            <img src={elemento.foto} alt="" Style="height:10em;width:10em; margin-top:20px; border-radius:50%" />
                        </div>
                    </div>

                    <div className="col mt-4" Style="justify-content:centert;aling-items:center;flex-basis:280px;">
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Nombre:</h6><h6 className="cardh6">{elemento.name}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Raza:</h6><h6 className="cardh6">{elemento.raza}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Genero:</h6><h6 className="cardh6">{elemento.genero}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Edad:</h6><h6 className="cardh6">{elemento.edad}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Saludable:</h6><h6 className="cardh6">{elemento.saludable}</h6>
                        </div>
                    </div>


                    <div className="col mt-3" Style="justify-content:center;aling-items:center;flex-basis:280px;">
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Fecha de Nacimiento:</h6><h6 className="cardh6">{elemento.fechaN}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Vacunado <i className='bx bx-injection'></i>:</h6><h6 className="cardh6">{elemento.vacunado}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                            <h6>Fecha Ultima Vacuna <i className='bx bx-injection'></i>:</h6><h6 className="cardh6">{elemento.fechaUltimaV}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">
                            <h6>Desparacitado <i className='bx bxs-capsule'></i>:</h6><h6 className="cardh6">{elemento.desparacitado}</h6>
                        </div>
                        <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">
                            <h6>Fecha Ultima <i className='bx bxs-capsule'></i>:</h6><h6 className="cardh6">{elemento.fechaUltimaD}</h6>
                        </div>
                    </div>
                </div>
           <div className="col">
                    <div className="container d-flex" Style="justify-content:center;aling-items:center;flex-basis:280px;flex-wrap:wrap; margin-top:-30px;">
                        <div className="col">
                            <div className="container" Style="justify-content:flex-start;aling-items:center;">
                                <h6>Observaciones de Salud:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.salud2}</p>

                            </div>
                        </div>

                        <div className="col" Style="justify-content:centert;aling-items:center;">
                            <div className="container" Style="justify-content:flex-start;aling-items:start;">
                                <h6>Datos de Comportamiento:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.comportamiento}</p>
                            </div>
                        </div>


                        <div className="col" Style="justify-content:center;aling-items:center;">
                            <div className="container" Style="justify-content:flex-start;aling-items:start;">
                                <h6>Recomendaciones:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.recomendaciones}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-5">
                <div className="container d-flex" Style="justify-content:flex-end; gap:10px">
                <button Style=" border:none; background:none;" onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash cardU' Style="font-size:25px;"></i></button>
                <Link to ={`/edit2/${elemento.id}`} Style="background:none"><i className='bx bx-edit cardU' Style="font-size:25px;"></i></Link>
                </div>
                </div>
                </CardPet>      
               
    ))  
}
 
</div>
    
   


  )
}

export default CardPet1