



import { DivCard2, DivPadre } from '../styles/Styles1'; 
 import { Link } from 'react-router-dom' 
 import formacion from '../images/formacion.jpeg' 
 import hotel from '../images/hotel.jpeg' 
 import spa from '../images/spa.jpeg' 
 import React, {useEffect} from 'react' 
 import NavBar from '../components/NavBar'; 
 import ReactPlayer from "react-player"; 
 import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome, TextIntro2, Container1 } from '../styles/PagIntro' 
 import { FormatTextdirectionRToLRounded } from '@mui/icons-material'; 
 import Slider from '../components/Slider' 
 import { Footer } from '../components/Footer'; 
 import ContactForm from '../components/ContactForm'; 
 import FloatingActionButtons from '../components/ButtonFloating'; 
 import Banner from '../components/Banner'; 
 import Cards from '../components/Cards'; 
 import { useSelector, useDispatch } from 'react-redux';
 import { useNavigate } from 'react-router';
  

 export const Home = () => { 
  
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
  
 
  
  
//   useEffect(() => {

//   navigate('/');
//   },[dispatch])
let cont=0;
while (cont< 2){
cont++;

}

   return ( 
     <div className="col-12" Style="margin-top:-30px"> 
       <NavBar /> 
       <FloatingActionButtons /> 
       <Banner/> 
  
       <div className="col-12" Style="margin-top:-20px"> 
         <div className="container d-flex" Style="justify-content:center;aling-items:center;"> 
           <h1>Nuestros Servicios</h1> 
         </div> 
       </div> 
  
       <Cards/> 
  
       <div className="col-12" Style="margin-top:50px"> 
         <div className="container d-flex" Style="justify-content:center;aling-items:center;"> 
           <h1>Comunicate Con Nosotros</h1> 
         </div> 
       </div> 
       <ContactForm /> 
       <Footer /> 
     </div> 
  
   ) 
 }