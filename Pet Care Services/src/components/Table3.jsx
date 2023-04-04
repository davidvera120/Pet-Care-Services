import React, {useEffect, useState} from 'react'
import MUIDataTable from "mui-datatables"
import axios from "axios"
import { Div1, DivNav2, Form1 } from '../styles/Styles1';
import { CollectionsOutlined, ConnectingAirportsOutlined } from '@mui/icons-material';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome } from '../styles/PagIntro'
import { listaService} from '../Redux/Actions/readAction';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import { useSelector, useDispatch } from 'react-redux';





export const Table3 = () => {


  const {id} = useSelector(state => state.login)
  console.log(id)
  const dispatch = useDispatch();
  const {Service} = useSelector(state => state.read3)
  
  
  
 
  
  useEffect(() => {
    
  dispatch( listaService())
  
  },[dispatch])




const columns =[
    {
name:"tipo",
label:"SERVICIO"

    },
    {
    name:"nombre",
    label:"NOMBRE"
    
       },
       {
        name:"apellidos",
        label:"APELLIDOS"
        
        },{
        name:"email",
        label:"EMAIL"
            
        },{
        name:"telefono",
        label:"TELEFONO"
                
        },{
        name:"direccion",
        label:"DIRECCION"
                          
        },{
            name:"name",
            label:"MASCOTA"
                
            },{
            name:"especie",
            label:"ESPECIE"
                    
            },{
            name:"plan",
            label:"Plan"
                              
            },{
                name:"recoger",
                label:"RECOGER"
                    
                },{
                name:"hora",
                label:"HORA"
                        
                },{
                name:"fechaInicio",
                label:"FECHA LLEGADA"
                                  
                },{
                    name:"fechaIda",
                    label:"FECHA PARTIDA"
                        
                    },{
                    name:"comentarios",
                    label:"COMENTARIOS"
                            
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
    title={"Lista de Agenda"}
    data={Service}
    columns={columns}
    options={options}
    />
    </div>
    
   
  )
}

export default Table3