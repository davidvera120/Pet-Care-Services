import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState} from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux'
import { addCandidate } from "../Redux/Actions/candidateAction";
import { SentimentDissatisfiedOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { editUser } from "../Redux/Actions/editAction";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export const ModalEdit1 = () => {

  const navigate = useNavigate();
const [abierto, setabierto]= useState(false)

const funcionModal = (valor, id2) => {

setabierto(valor)

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
    
    const user  = useSelector( state => state.login )
      console.log(user)
  
      const id1=user.id;
    console.log(id1)
    const email1=user.email;
    const data2 = useSelector(state => state.read2)
console.log(data2)
const [apellidos, setApellidos]= useState(data2.apellidos)
const [names, setNames]=useState(data2.name)
const [cedula, setCedula] = useState(data2.cedula)
const [direccion, setDireccion] = useState(data2.direccion)
const [telefono, setTelefono] = useState(data2.telefono)
const [foto, setImage] = useState(data2.foto)
const [loading, setLoading] = useState(false)


const dispatch = useDispatch();
const DatosCliente = async (e) => {
e.preventDefault()

dispatch(editUser({name: names, apellidos: apellidos, cedula: cedula, direccion: direccion, email: email1, telefono: telefono, foto: foto}, id1));
MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>Welcome Back</i>,
  icon: 'success'
})
navigate('/home1');
}

  return (
    <div>
 
    <button  Style="border:none; background:none;"  onClick={()=>{funcionModal(true)}}><i className='bx bx-edit cardU' Style="font-size:25px;"></i></button>
   
  

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

Editar

</button>
</ModalFooter>
  </Form>
  </Singupfrm>
         </ModalBody>

   
</Modal>

    </div>
  )
}

export default ModalEdit1