import React, {useImperativeHandle, useState} from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import { collection, addDoc, setDoc, doc,} from '@firebase/firestore';
import {db} from '../firebase'
import { useSelector } from 'react-redux'
import { editCandidates } from "../Redux/Actions/editAction";
import { useDispatch } from "react-redux";
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

export const Edit = () => {

  const {id}=useParams()
  const user  = useSelector( state => state.login )
    console.log(user)

    const id1=user.id;
  console.log(id1)
const [apellidos, setApellidos]= useState('')
const [names, setNames]=useState('')
const [cedula, setCedula] = useState('')
const [fechaN, setFechaN] = useState('')
const [email, setEmail] = useState('')
const [github, setGithub] = useState('')




const dispatch = useDispatch();
const EditCandidate = async (e) => {
e.preventDefault()
// await addDoc (ejerciciosCollection,{name: name, video: video, descripcion: descripcion, img: img, categoria: categoria, duracion: duracion } )
dispatch(editCandidates({name: names, apellidos: apellidos, cedula: cedula, fechaNacimiento: fechaN, email: email, usuarioGithub: github }, id1, id));

}

  return (

    <section>
    <div className="col-12">
    <div className="row">
    <NavBar />
    <div className="col-12">
    <Singupfrm>

    <Form onSubmit={EditCandidate}>

    <InputContainer className="mb-2 mt-3">
    <Label htmlFor="name">Nombres</Label>
    <Input1 type="text" name="name" required="required"  onChange={(e) => setNames(e.target.value)} placeholder="nombres"/>
  </InputContainer>
  <InputContainer className="mb-3 mt-3">
    <Label htmlFor="descripcion">Apellidos</Label>
    <Input1 type="text" name="descripcion"   onChange={(e) => setApellidos(e.target.value)} placeholder="apellidos"/>
  </InputContainer>
  <InputContainer className="mb-3 mt-3">
    <Label htmlFor="duracion">Cedula</Label>
    <Input1 type="text" name="duracion"   onChange={(e) => setCedula(e.target.value)} placeholder="cedula"/>
  </InputContainer>
  <InputContainer className="mb-5 mt-3">
  <h6 Style="color:#B0C3FD;margin-left:-110px">Fecha de Nacimiento</h6>
  <Input1 type="date" name="video"  onChange={(e) => setFechaN(e.target.value)} placeholder="fecha de nacimiento"/>
</InputContainer>
<InputContainer className="mb-3">
<Label htmlFor="email">Email</Label>
<Input1 type="email" name="email"   onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
</InputContainer>
<InputContainer className="mb-3 mt-3">
<Label htmlFor="github">Usuario GitHub</Label>
<Input1 type="text" name="github"   onChange={(e) => setGithub(e.target.value)} placeholder="usuario Github"/>
</InputContainer>
<ButtonIntro1
    type="submit">
  
    Edit

</ButtonIntro1>
  </Form>
  </Singupfrm>
</div>
</div>
</div>
</section>
  )
}
export default Edit