
import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar1 from '../components/NavBar1';
import { ButtonIntro1, Container1, TextIntro2, ButtonHome, CardUser, CardPet, CardBoard} from '../styles/PagIntro'
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaUser, listaUser2} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Table from "../components/Table"
import Slider from "../components/Slider"

import Cookies from 'universal-cookie'
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

import CardUser1 from './CardUser';
import Table2 from './Table2';


export const Home1 = () => {

   
const {id} = useSelector(state => state.login)
console.log(id)
const dispatch = useDispatch();
const {data2} = useSelector(state => state.read2)
console.log(data2)


  return (
  


<div className="col">
<NavBar1 />
<div className="container d-flex" Style="justify-content:center;aling-items:center; gap:0px; flex-wrap:wrap">
<CardBoard>
<div className="col" Style="margin-top:20px">
<div className="container d-flex" Style="justify-content:center;aling-items:center; gap:20px;flex-wrap:wrap">
<Modal1 /> 
<Modal2 />
</div>
</div>

<div className="container" Style="margin-top:20px;">
<div className="container d-flex" Style="justify-content:center;aling-items:center;flex-wrap:wrap;">
<CardUser1/>
<Modal3 />
</div>
<Table2 />
</div>
</CardBoard>
</div>

</div>











  )
}

export default Home1