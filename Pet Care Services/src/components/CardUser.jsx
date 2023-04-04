import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet} from '../styles/PagIntro'

import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaUser3} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import ModalEdit1 from './ModalEdit1';

export const CardUser1 = () => {

    const {id} = useSelector(state => state.login)
    console.log(id)
    const dispatch = useDispatch();
    const {User} = useSelector(state => state.read)
    console.log(User)

    const data2 = useSelector(state => state.read2)
    
    
    const deleteWorkout = async (id2) => {
        const workDoc = doc(db, "data", id2)
        await deleteDoc(workDoc)
      dispatch( listaUser3(id))
    }
    
    useEffect(() => {
      
    dispatch( listaUser3())
    
    },[dispatch])




   

  return (
  
    

  
   
            <CardUser>
    <div className="col">
                <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                    <img src={data2.foto} alt="" Style="height:160px;width:160px; margin-top:20px; border-radius:50%" />
                </div>
            </div>
            <div className="col-12">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                            <h6 className="cardh6">{data2.name}</h6> <h6  className="cardh6" Style="margin-left:5px;">{data2.apellidos}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <h6 className="cardh6">C.c.{data2.cedula}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bxs-phone cardU'></i><h6 className="cardh6">{data2.telefono}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bx-envelope cardU'></i><h6 className="cardh6">{data2.email}</h6>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="container d-flex" Style="justify-content: center;aling-items:center;">
                                <i className='bx bx-map cardU'></i><p className="cardh6"  Style="width:10em; height:3em">{data2.direccion}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 mt-5">
<div className="container d-flex" Style="justify-content:flex-end; gap:10px">
<button Style=" border:none; background:none;" onClick={ ()=> {deleteWorkout(data2.id)}}><i className='bx bxs-trash cardU' Style="font-size:25px;"></i></button>
<ModalEdit1 />
</div>
</div>



                </CardUser>
               

   


    
  )
}

export default CardUser1