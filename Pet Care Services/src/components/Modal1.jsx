
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect} from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, InputModal, InputGroup, InputLabel } from '../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux'
import { addCandidate, registerUser } from "../Redux/Actions/candidateAction";
import { FormatQuoteTwoTone, SentimentDissatisfiedOutlined } from '@mui/icons-material';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { listaUser} from '../Redux/Actions/readAction';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

export const Modal1 = () => {

const [abierto, setabierto]= useState(false)

const funcionModal = (valor) => {

setabierto(valor)

}
const navigate = useNavigate();
const user  = useSelector( state => state.login )

    console.log(user)
    const id1=user.id;
   const email1=user.email;
    console.log(id1)
console.log(email1)

const [apellidos, setApellidos]= useState('')
const [names, setNames]=useState('')
const [cedula, setCedula] = useState('')
const [direccion, setDireccion] = useState('')
const [telefono, setTelefono] = useState('')
const [foto, setImage] = useState('')
const [loading, setLoading] = useState(false)


const dispatch = useDispatch();
const DatosCliente = async (e) => {
e.preventDefault()

// dispatch(addCandidate({name: names, foto: foto, apellidos: apellidos, cedula: cedula, direccion: direccion, email: email1, telefono: telefono}, id1));
dispatch(registerUser({name: names, foto: foto, apellidos: apellidos, cedula: cedula, direccion: direccion, email: email1, telefono: telefono}, id1))
MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>Welcome Back</i>,
  icon: 'success'
})
navigate('/home1');
}

const uploadImage = async (e) => {
  const files=e.target.files;
  const data=new FormData();
  data.append('file', files[0])
  data.append('upload_preset','fileHuellitas')
  setLoading(true)
  const res=await fetch('https://api.cloudinary.com/v1_1/doshr4fpd/image/upload',
    {
      method:'POST',
      body:data
    }
  )
  const file=await res.json()
  console.log(res)
  setImage(file.secure_url)
  console.log(foto)
  setLoading(false)
}


  return (
    <div>
 
    <button className="custom-btn2 btn-2" onClick={()=>{funcionModal(true)}}><i className='bx bx-user' Style="margin-right:20px;"></i>Datos personales</button>
   
  

<Modal isOpen={abierto}>

    <ModalHeader>
    <button onClick={()=>{funcionModal(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Registro Datos Personales</span>
    </ModalHeader>

         <ModalBody>
         <Singupfrm>

    <Form onSubmit={DatosCliente}>
    <InputContainer className="mb-5 mt-4">
    <h6 Style="margin-left:-200px">Nombres:</h6>
    <Input1 type="text" name="name"   onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Apellidos:</h6>
    <Input1 type="text" name="descripcion"   onChange={(e) => setApellidos(e.target.value)} placeholder="apellidos"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px">Cedula:</h6>
    <Input1 type="text" name="cedula"   onChange={(e) => setCedula(e.target.value)} placeholder="cedula"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-4">
  <h6 Style="margin-left:-200px;">Direccion:</h6>
  <Input1 type="text" name="direccion"  onChange={(e) => setDireccion(e.target.value)} placeholder="direccion"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Telefono:</h6>
<Input1 type="text" name="telefono"  onChange={(e) => setTelefono(e.target.value)} placeholder="telefono"/>
</InputContainer>
<InputContainer className="mb-5 mt-4">
<h6 Style="margin-left:-200px">Foto:</h6>
<input
id="fileSelector"
type="file"
name="file"

onChange={uploadImage}
/>
{loading ? (
  <h6>Loading...</h6>
) : (
  <img src={foto} style={{ width: '40px' }} />
)}
</InputContainer>

<ModalFooter>
    
<button  className="custom-btn btn-1 mt-4"  type="submit">

Guardar

</button>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

   
</Modal>

    </div>
  )
}

export default Modal1