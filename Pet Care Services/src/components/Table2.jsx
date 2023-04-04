import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';
import { ButtonIntro1, Container1, TextIntro2, ButtonHome} from '../styles/PagIntro'
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaService} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Table from "../components/Table"


export const Table2 = () => {


    const {id} = useSelector(state => state.login)
    console.log(id)
    const dispatch = useDispatch();
    const {Service} = useSelector(state => state.read3)
    console.log(Service)
    const user  = useSelector( state => state.login )
    console.log(user)

    const id1=user.id;
  console.log(id1)
  const email1=user.email;
  const [filtrado, setFiltrado]=useState([])

    const filtrarServicios = async() => {
      const filtrado1 = Service.filter((elemento) =>{
        
          return elemento.email===email1 
      });
     
      setFiltrado(filtrado1)
  
   }




     const deleteWorkout = async (id2) => {
      const workDoc = doc(db, "agenda1", id2)
      await deleteDoc(workDoc)
      dispatch( listaService(id))
    }
    
    useEffect(() => {
      
    dispatch( listaService())
    
    },[dispatch])





  return (
   
    <div className="container mt-1 anchoTabla" Style="justify-content:center;">
    
<div className="container d-flex" Style="justify-content:center;aling-items:center;">
<button className="custom-btn btn-1" onClick={()=>{filtrarServicios()}}>Ver Agenda</button>
</div>


  
    <div className="table-responsive">
    <table className="table  table-striped">
    <thead>
    <tr>
    <th>Servicio</th>
    <th>Nombre Cliente</th>
    <th>Apellidos</th>
    <th>Telefono</th>
    <th>Nombre Mascota</th>
    <th>Especie</th>
    <th>Plan</th>
    <th>Recoger</th>
    <th>Direccion</th>
    <th>Hora Aprox</th>
    <th>Fecha LLegada</th>
    <th>Fecha Salida</th>
    <th>Comentarios</th>
    <th>Eliminar</th>
    </tr>
    </thead>

<tbody>
{
    filtrado?.map(elemento=>( 
<tr>
<td>{elemento.tipo}</td>
<td>{elemento.nombre}</td>
<td>{elemento.apellidos}</td>
<td>{elemento.telefono}</td>
<td>{elemento.nombreMascota}</td>
<td>{elemento.especie}</td>
<td>{elemento.plan}</td>
<td>{elemento.recoger}</td>
<td>{elemento.direccion}</td>
<td>{elemento.hora}</td>
<td>{elemento.fechaInicio}</td>
<td>{elemento.fechaIda}</td>
<td>{elemento.comentarios}</td>
<td><button Style="border:none; background:none;" onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash' Style="font-size:22px; color:rgb(165,11,63)"></i></button></td>
</tr>
))
}
</tbody>

    </table>
    </div>
    </div>
   
  )
}

export default Table2