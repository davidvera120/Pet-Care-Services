import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



import {LogIn} from '../components/LogIn';
import {SingUp} from '../components/SingUp';
import {HomeP} from '../components/HomeP';
import {VistaMascota} from '../components/VistaMascota';
import {VistaMascota2} from '../components/VistaMascota2';  
import {Home} from '../containers/Home';
import {Home2} from '../components/Home2';
import {Home1} from '../components/Home1';
import "bootstrap/dist/css/bootstrap.min.css";
import { addDoc, collection, deleteDoc, doc, getDoc, query, setDoc, updateDoc, where } from 'firebase/firestore'


import {New} from '../components/New';
import {ModalEdit2} from '../components/ModalEdit2';
import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import Escuela from '../components/Escuela'; 
import Hotel from '../components/Hotel'; 
import SpaMascota from '../components/SpaMascota'; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { HomeMiniSharp, ViewAgendaTwoTone } from '@mui/icons-material';
import { db } from '../firebase'
import Cookies from 'universal-cookie';

 export const AppRoutes =() => {

    const [user1, setUser] = useState(null);
    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();
console.log(user1);


    const getData = async (uid) => {
        const docuRef=doc(db,"data",uid)
        const data1=await getDoc(docuRef)
        return data1.data().rol;   
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function setUserWithFirebaseAndRol(usuarioFirebase) {
        getData(usuarioFirebase.uid).then((rol) => {
          const userData = {
            uid: usuarioFirebase.uid,
            email: usuarioFirebase.email,
            rol: rol,
          }
          const cookies=new Cookies();
          cookies.set('rol',userData.rol, {path:'/'})
        });
         
      }

    useEffect(() => {
        onAuthStateChanged( auth, (user) => {
            
            if (user?.uid) {
                setUserWithFirebaseAndRol(user);
                dispatch(loginProvider(user.uid,user.displayName,user.email))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        } )
    }, [dispatch, setAuth,setUserWithFirebaseAndRol])


        return (
         
           
                <BrowserRouter>
                    <Routes>
                
                    <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <LogIn /> </PublicRoutes>} />
                    <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />
                    <Route path='/Escuela' element={<PublicRoutes > <Escuela /> </PublicRoutes>} /> 
                    <Route path='/Hotel' element={<PublicRoutes > <Hotel /> </PublicRoutes>} /> 
                    <Route path='/SpaMascota' element={<PublicRoutes > <SpaMascota /> </PublicRoutes>} /> 
                    <Route path="/home" element={<PublicRoutes isAutentication={auth1}><Home /></PublicRoutes>} />
                    

                        <Route path='/' element={<PrivateRoutes isAutentication={auth1}> <Home /> </PrivateRoutes>} />
                       
                        <Route path="/new" element={<PrivateRoutes isAutentication={auth1}><New /></PrivateRoutes>} />
                        <Route path="/edit2/:id" element={<PrivateRoutes isAutentication={auth1}><ModalEdit2 /></PrivateRoutes>} /> 
                        <Route path="/homep" element={<PrivateRoutes isAutentication={auth1}><HomeP /></PrivateRoutes>} />
                        <Route path="/home2" element={<PrivateRoutes isAutentication={auth1}><Home2 /></PrivateRoutes>} />
                        <Route path="/home1" element={<PrivateRoutes isAutentication={auth1}><Home1 /></PrivateRoutes>} />
                        <Route path="/vistamascota" element={<PrivateRoutes isAutentication={auth1}><VistaMascota /></PrivateRoutes>} />
                        <Route path="/vistamascota2" element={<PrivateRoutes isAutentication={auth1}><VistaMascota2 /></PrivateRoutes>} />
                        
                        <Route path="*" element={<Navigate to="/login"/>}/> 
                     <Route path="/"   element={<Home />} />
                       
                   
                  
                    </Routes>
                </BrowserRouter>
             
          
        );
    }

export default AppRoutes;