
import Home2 from "./Home2";
import Home1 from "./Home1";
import Cookies from 'universal-cookie'
import React, { useState, useEffect} from 'react';
import { listaUser3} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


export const HomeP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const {id} = useSelector(state => state.login)
console.log(id)
const data2 = useSelector(state => state.read2)
    

 const rol=data2.rol; 


 useEffect(() => {
      
  dispatch( listaUser3())
  
  },[dispatch])

  return (
    <div>
    {rol==="admin"? <Home2 /> : <Home1/>}  
    </div>
  )
}

export default HomeP