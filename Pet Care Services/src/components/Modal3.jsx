
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect} from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, Input2, Select1, Input3, CardUser } from '../styles/PagIntro'
import hotel1 from '../images/hotel1.png'
import hvmascota2 from '../images/hvmascota2.png'
import spa4 from '../images/spa4.png'
import cesar1 from '../images/cesar1.jpeg'
import guarderia1 from '../images/guarderia1.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { addAgenda, registerService1 } from "../Redux/Actions/candidateAction";
import { listaUser2} from '../Redux/Actions/read2Action';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { WbIncandescentTwoTone } from '@mui/icons-material';
const MySwal = withReactContent(Swal)



export const Modal3 = () => {

    const navigate = useNavigate();
    const user  = useSelector( state => state.login )
    const data2 = useSelector(state => state.read2)
    const nombre1=data2.name;
    const direccion1=data2.direccion; 
    const telefono1=data2.telefono;
    const apellidos1=data2.apellidos;
   console.log(data2)
    const {id} = useSelector(state => state.login)
    console.log(id)
    console.log(user)
    const id1=user.id;
   const email1=user.email;
    console.log(id1)
console.log(email1)

const [plan, setPlan]= useState('')
const [names, setNames]=useState('')
const [hora, setHora] = useState('')
const [fechaIncio, setFechaIncio] = useState('') 
const [fechaIda, setFechaIda] = useState('') 
const [comentarios, setComentarios] = useState('')
const [recoger, setRecoger] = useState('')
const [tipo1, setTipo1] = useState('hotel')
const [tipo2, setTipo2] = useState('guarderia')
const [tipo3, setTipo3] = useState('adiestramiento')
const [tipo4, setTipo4] = useState('spa')

const [apellidos, setApellidos]= useState('')

const [especie, setEspecie] = useState('')
const [direccion, setDireccion] = useState('')
const [telefono, setTelefono] = useState('')

const dispatch = useDispatch();

useEffect(() => {
      
    dispatch( listaUser2(id))
    
    },[dispatch])

const DatosService = async (e) => {
e.preventDefault()

dispatch(registerService1({nombreMascota: names, email:email1, especie: especie, plan: plan, recoger: recoger, fechaInicio: fechaIncio, fechaIda: fechaIda, hora: hora, comentarios: comentarios, tipo: tipo1, direccion: direccion1, telefono:telefono1, nombre:nombre1, apellidos: apellidos1 }));

MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>Welcome Back</i>,
  icon: 'success'
})
setabierto(false)
navigate("/home1")
} 

const DatosService1 = async (e) => {
    e.preventDefault()
    
    dispatch(registerService1({nombreMascota: names, email:email1, especie: especie, plan: plan, recoger: recoger, fechaInicio: fechaIncio, fechaIda: fechaIda, hora: hora, comentarios: comentarios, tipo: tipo2, direccion: direccion1, telefono:telefono1, nombre:nombre1, apellidos: apellidos1}));
    
    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>Welcome Back</i>,
      icon: 'success'
    })
    setabierto1(false)
navigate("/home1")
    } 

    const DatosService2 = async (e) => {
        e.preventDefault()
        
        dispatch(registerService1({nombreMascota: names, email:email1, especie: especie, plan: plan, recoger: recoger, fechaInicio: fechaIncio, fechaIda: fechaIda, hora: hora, comentarios: comentarios, tipo: tipo3, direccion: direccion1, telefono:telefono1, nombre:nombre1, apellidos: apellidos1}));
        
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Welcome Back</i>,
          icon: 'success'
        })
        setabierto2(false)
    
        navigate("/home1")
        } 

        const DatosService3 = async (e) => {
            e.preventDefault()
            
            dispatch(registerService1({nombreMascota: names, email:email1, especie: especie, plan: plan, recoger: recoger, fechaInicio: fechaIncio, fechaIda: fechaIda, hora: hora, comentarios: comentarios, tipo: tipo4,  direccion: direccion1, telefono:telefono1, nombre:nombre1, apellidos: apellidos1}));
            
            MySwal.fire({
              title: <strong>Good job!</strong>,
              html: <i>Welcome Back</i>,
              icon: 'success'
            })
            setabierto3(false)
            
            navigate("/home1")
           
            } 


const [abierto, setabierto]= useState(false)
const [abierto1, setabierto1]= useState(false)
const [abierto2, setabierto2]= useState(false)
const [abierto3, setabierto3]= useState(false)

const funcionModal = (valor) => {
    
    setabierto(valor)
    
    }
const funcionModal1 = (valor) => {
    
    setabierto1(valor)
        
    }
const funcionModal2 = (valor) => {
    
    setabierto2(valor)
            
    }
const funcionModal3 = (valor) => {
    
    setabierto3(valor)
                
    }


  return (
    <div>
   
  
  
    <div className="col-12 mt-3">
    <div className="container" Style=" text-align:center;justify-content:center;">

    <div className="col-12">
    <div className="row">
    <h1 Style="color:rgb(165,11,63)">Agendar Servicio</h1>
    </div>
    </div>
    <div className="col-12 mt-4">
    <button className="custom-btn2 btn-2" onClick={()=>{funcionModal(true)}}>
     
    <div className="col-12">
    <div className="row">
   
    <div className="col-2">
    <div className="container" Style="">
    <img src={hotel1} alt="" Style="height:100px;width:100px; margin-left:-37px; margin-top:-10px;border-radius:5px;"/>
    </div>
    </div>
    <div className="col-8" Style="margin-left:0px">
    <h2 Style="font-size:20px; margin-top:30px">Hotel Para Perros y Gatos</h2>
   
    </div>
    <div className="col-2">
   
    <i className='bx bx-chevron-right-circle' Style="font-size:40px; margin-top:15px"></i>
    </div>
    </div>
    </div>
    
    </button>
    </div>


    <div className="col-12 mt-4">
    <button className="custom-btn2 btn-2" onClick={()=>{funcionModal1(true)}}>
     
    <div className="col-12">
    <div className="row">
   
    <div className="col-2">
    <div className="container" Style="">
    <img src={guarderia1} alt="" Style="height:100px;width:70px; margin-left:-37px; margin-top:-10px;border-radius:5px;"/>
    </div>
    </div>
    <div className="col-8" Style="margin-left:0px">
    <h2 Style="font-size:20px; margin-top:30px">Guarderia Para Perros y Gatos</h2>
   
    </div>
    <div className="col-2">
    <i className='bx bx-chevron-right-circle' Style="font-size:40px; margin-top:15px"></i>
    </div>
    </div>
    </div>
    
    </button>
    </div>

    <div className="col-12 mt-4">
   
    <button className="custom-btn2 btn-2" onClick={()=>{funcionModal2(true)}}>
     
    <div className="col-12">
    <div className="row">
   
    <div className="col-2">
    <div className="container" Style="">
    <img src={cesar1} alt=""  Style="height:100px;width:85px; margin-left:-37px; margin-top:-10px; border-radius:5px;"/>
    </div>
    </div>
    <div className="col-8" Style="">
    <h2 Style="font-size:20px; margin-top:30px">Adiestramiento Canino</h2>
   
    </div>
    <div className="col-2">
    <i className='bx bx-chevron-right-circle' Style="font-size:40px; margin-top:15px"></i>
    </div>
    </div>
    </div>
    
    </button>
</div>
    <div className="col-12 mt-4">
    <button className="custom-btn2 btn-2" onClick={()=>{funcionModal3(true)}}>
     
    <div className="col-12">
    <div className="row">
   
    <div className="col-2">
    <div className="container" Style="">
    <img src={spa4} alt="" Style="height:110px;width:110px; margin-left:-37px; margin-top:-10px;border-radius:5px;"/>
    </div>
    </div>
    <div className="col-8" Style="margin-left:0px">
    <h2 Style="font-size:20px; margin-top:30px">Spa Mascotas</h2>
   
    </div>
    <div className="col-2">
    <i className='bx bx-chevron-right-circle' Style="font-size:40px; margin-top:15px"></i>
    </div>
    </div>
    </div>
    
    </button>
    </div>
    </div>
    </div>

<Modal isOpen={abierto}>

    <ModalHeader>
    <button onClick={()=>{funcionModal(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Agendar Hotel</span>
    </ModalHeader>

         <ModalBody>
        
         <Singupfrm>

    <Form onSubmit={DatosService}>
    <InputContainer className="mb-5 mt-4">
    <h6 Style="margin-left:-200px">Nombre Mascota:</h6>
    <Input1 type="text" name="name"   onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Especie:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="perro"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Perro</h6>
  <Input3 type="checkbox" value="gato"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Gato</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Plan:</h6>
  <Select1  onChange={(e) => setPlan(e.target.value)} name="plan">
  <option value="1 noche">1 Noche</option>
  <option value="mas de 3 noches">Mas de 3 Noches</option>
  <option value="mas de 3 noches">Mas de 7 Noches</option>
  <option value="mas de 3 noches">Mas de 15 Noches</option>
  <option value="mas de 3 noches">Mas de 30 Noches</option>
  </Select1> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Recoger:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="si"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >Si</h6>
  <Input3 type="checkbox" value="no"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >No</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha LLegada:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIncio(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha Partida:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIda(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Hora Aprox:</h6>
<Input1 type="time" name="hora"  onChange={(e) => setHora(e.target.value)} placeholder="telefono"/>
</InputContainer>
<div className="col-12 mt-3">
<div className="container" Style="justify-content: center;aling-items:center;">
      <h6>Comentarios:</h6>
      <textarea name="textarea" rows="5" cols="43" onChange={(e) => setComentarios(e.target.value)} ></textarea>
     </div>
     </div>

      <ModalFooter>
      <div className="col-12">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Agendar

</button>
</div>
</div>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

</Modal>

<Modal isOpen={abierto1}>

    <ModalHeader>
    <button onClick={()=>{funcionModal1(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Agendar Guarderia</span>
    </ModalHeader>

         <ModalBody>
        
         <Singupfrm >

    <Form onSubmit={DatosService1}>
    <InputContainer className="mb-5 mt-4">
    <h6 Style="margin-left:-200px">Nombre Mascota:</h6>
    <Input1 type="text" name="name"   onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Especie:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="perro"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Perro</h6>
  <Input3 type="checkbox" value="gato"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Gato</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Plan:</h6>
  <Select1  onChange={(e) => setPlan(e.target.value)} name="plan">
  <option value="1 dia de sol">1 Dia de Sol</option>
  <option value="mas de 3 noches">1 Dia a la Semana</option>
  <option value="mas de 3 noches">2 Dias a la Semana</option>
  <option value="mas de 3 noches">3 Dias a la Semana</option>
  <option value="mas de 3 noches">4 Dias a la Semana</option>
  <option value="mas de 3 noches">5 Dias a la Semana</option>
  </Select1> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Recoger:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="si"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >Si</h6>
  <Input3 type="checkbox" value="no"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >No</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha LLegada:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIncio(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha Partida:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIda(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Hora Aprox:</h6>
<Input1 type="time" name="hora"  onChange={(e) => setHora(e.target.value)} placeholder="telefono"/>
</InputContainer>
<div className="col-12 mt-3">
<div className="container" Style="justify-content: center;aling-items:center;">
      <h6>Comentarios:</h6>
      <textarea name="textarea" rows="5" cols="43" onChange={(e) => setComentarios(e.target.value)} ></textarea>
     </div>
     </div>

      <ModalFooter>
      <div className="col-12">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Agendar

</button>
</div>
</div>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

</Modal>



<Modal isOpen={abierto2}>

    <ModalHeader>
    <button onClick={()=>{funcionModal2(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Agendar Adiestramiento</span>
    </ModalHeader>

         <ModalBody>
        
         <Singupfrm >

    <Form onSubmit={DatosService2}>
    <InputContainer className="mb-5 mt-4">
    <h6 Style="margin-left:-200px">Nombre Mascota:</h6>
    <Input1 type="text" name="name"   onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Plan:</h6>
  <Select1  onChange={(e) => setPlan(e.target.value)} name="plan">
  <option value="adiestramiento canino">Adiestramiento Canino</option>
  <option value="modificacion de conducta">Modificacion de Conducta</option>
  <option value="asesorias comportamentales">Asesorias Comportamentales</option>
  </Select1> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Recoger:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="si"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >Si</h6>
  <Input3 type="checkbox" value="no"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >No</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha LLegada:</h6>
  <Input1 type="date" name="fechaInicio"  onChange={(e) => setFechaIncio(e.target.value)}/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha Partida:</h6>
  <Input1 type="date" name="fechaIda"  onChange={(e) => setFechaIda(e.target.value)}/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Hora Aprox:</h6>
<Input1 type="time" name="hora"  onChange={(e) => setHora(e.target.value)}/>
</InputContainer>
<div className="col-12 mt-3">
<div className="container" Style="justify-content: center;aling-items:center;">
      <h6>Comentarios:</h6>
      <textarea name="textarea" rows="5" cols="43" onChange={(e) => setComentarios(e.target.value)} ></textarea>
     </div>
     </div>

      <ModalFooter>
      <div className="col-12">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Agendar

</button>
</div>
</div>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

</Modal>


<Modal isOpen={abierto3}>

    <ModalHeader>
    <button onClick={()=>{funcionModal3(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Agendar Spa</span>
    </ModalHeader>

         <ModalBody>
        
         <Singupfrm >

    <Form onSubmit={DatosService3}>
    <InputContainer className="mb-5 mt-4">
    <h6 Style="margin-left:-200px">Nombre Mascota:</h6>
    <Input1 type="text" name="name"   onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Especie:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="perro"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Perro</h6>
  <Input3 type="checkbox" value="gato"  onChange={(e) => setEspecie(e.target.value)}/>
  <h6 className="card1h6" >Gato</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Plan:</h6>
  <Select1  onChange={(e) => setPlan(e.target.value)} name="plan">
  <option value="oro">ORO</option>
  <option value="plata">PLATA</option>
  <option value="bronce">BRONCE</option>
  </Select1> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Recoger:</h6>
  <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
  <Input3 type="checkbox" value="si"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >Si</h6>
  <Input3 type="checkbox" value="no"  onChange={(e) => setRecoger(e.target.value)}/>
  <h6 className="card1h6" >No</h6>
  </div> 
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha LLegada:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIncio(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Fecha Partida:</h6>
  <Input1 type="date" name="direccion"  onChange={(e) => setFechaIda(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Hora Aprox:</h6>
<Input1 type="time" name="hora"  onChange={(e) => setHora(e.target.value)} placeholder="telefono"/>
</InputContainer>
<div className="col-12 mt-3">
<div className="container" Style="justify-content: center;aling-items:center;">
      <h6>Comentarios:</h6>
      <textarea name="textarea" rows="5" cols="43" onChange={(e) => setComentarios(e.target.value)} ></textarea>
     </div>
     </div>

      <ModalFooter>
      <div className="col-12">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Agendar

</button>
</div>
</div>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

</Modal>


    </div>
  )
}

export default Modal3