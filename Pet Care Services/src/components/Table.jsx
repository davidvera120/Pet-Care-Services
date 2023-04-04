import React, {useEffect, useState} from 'react'
import MUIDataTable from "mui-datatables"
import axios from "axios"
import { Div1, DivNav2, Form1 } from '../styles/Styles1';
import { CollectionsOutlined, ConnectingAirportsOutlined } from '@mui/icons-material';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome } from '../styles/PagIntro'
import { listaUsers} from '../Redux/Actions/readUsersAction';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import { useSelector, useDispatch } from 'react-redux';





export const Table = () => {


  const {id} = useSelector(state => state.login)
  console.log(id)
  const dispatch = useDispatch();
  const {Users} = useSelector(state => state.read4)
  console.log(Users)
  
  
  
  
  useEffect(() => {
    
  dispatch( listaUsers())
  
  },[dispatch])




const columns =[
    {
name:"name",
label:"NOMBRES"

    },
    {
    name:"apellidos",
    label:"APELLIDOS"
    
       },
       {
        name:"cedula",
        label:"CEDULA"
        
        },{
        name:"email",
        label:"EMAIL"
            
        },{
        name:"telefono",
        label:"TELEFONO"
                
        },{
        name:"direccion",
        label:"DIRECCION"
                          
        }]

const options = {
    filterType: "checkbox",        
    rowsPerPage:[3],
    rowsPerPageOptions:[3,5,10,15,20],
    jumpToPage: true,
    textLabels:{
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF"
      }
    },
    onChangePage (currentPage) {
      console.log({currentPage});
    },
    onChangeRowsPerPage (numberOfRows) {
      console.log({numberOfRows});
    }
  }

  return (


   <div className="anchoTabla" Style="margin-top:50px;">
    <MUIDataTable
    title={"Lista de Usuarios"}
    data={Users}
    columns={columns}
    options={options}
    />
    </div>
    
   
  )
}

export default Table