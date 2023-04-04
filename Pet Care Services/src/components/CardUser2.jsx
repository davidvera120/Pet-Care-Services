import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet} from '../styles/PagIntro'

import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';

import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaUsers} from '../Redux/Actions/readUsersAction';
import { useSelector, useDispatch } from 'react-redux';
import ModalEdit1 from './ModalEdit1';



export const CardUser2 = () => {

    
  const {id} = useSelector(state => state.login)
  console.log(id)
  const dispatch = useDispatch();
  const {Users} = useSelector(state => state.read4)
  console.log(Users)
  
  
  const deleteWorkout = async (id2) => {
    const docRef=doc(db, "data", id)
    const colRef=collection(docRef, "agenda")     
    const workDoc = doc(colRef, id2)
    await deleteDoc(workDoc)
    dispatch( listaUsers(id))
  }
  
  useEffect(() => {
    
  dispatch( listaUsers())
  
  },[dispatch])




    function siguiente() {
        let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
        const slider = document.querySelector("#slider");
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionLast);
            slider.style.marginLeft = "0";
        }, 500);
    }
    
     function anterior() {
        let sliderSection = document.querySelectorAll(".slider__section");
        const slider = document.querySelector("#slider");
        let sliderSectionFirst = sliderSection[sliderSection.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
            slider.style.marginLeft = "0";
        }, 500);
    }

  return (
    <div>
    

    <div className="col-12" Style="margin-top:-60px;" >
    <div className="container d-flex" Style="justify-content: center;aling-items:center;">
    <div className="slider__contenedor">
    <div classname="slider" id="slider">
    {
        Users?.map(elemento =>(
            <div className="slider__section">
            <CardUser>
    <div className="col-12">
                <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                    <img src={elemento.img} alt="" Style="height:160px;width:160px; margin-top:20px;" />
                </div>
            </div>
            <div className="col-12">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                            <h6 className="cardh6">{elemento.name}</h6> <h6  className="cardh6" Style="margin-left:5px;">{elemento.apellidos}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <h6 className="cardh6">C.c.{elemento.cedula}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bxs-phone cardU'></i><h6 className="cardh6">{elemento.telefono}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bx-envelope cardU'></i><h6 className="cardh6">{elemento.email}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bx-map cardU'></i><p className="cardh6"  Style="width:10em; height:3em">{elemento.direccion}</p>
                            </div>
                        </div>

                        <button className="custom-btn btn-1">Ver Mascota</button>

                    </div>
                </div>
                <div className="col-12 mt-5">
<div className="container d-flex" Style="justify-content:flex-end; gap:10px">
<button Style=" border:none; background:none;" onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash cardU' Style="font-size:25px;"></i></button>
<Link to ={`/edit/${elemento.id}`} Style="background:none"><ModalEdit1 /></Link>
</div>
</div>
<div className="col-12" Style="margin-top:-20px">
<div className="container d-flex" Style="justify-content: center;aling-items:center; gap:20px;">
<button id="btnAtras" Style="border:none"  onClick={()=>{anterior()}}><i Style="background:none;" className='bx bxs-chevron-left'></i></button>
<button  id="btnSiguiente" Style="border:none"   onClick={()=>{siguiente()}}><i Style="background:none;" className='bx bxs-chevron-right' ></i></button>
</div>
</div>


                </CardUser>
                </div>
    ))
   
}
   
</div>              
</div>
</div> 
</div> 
    </div>
  )
}

export default CardUser2