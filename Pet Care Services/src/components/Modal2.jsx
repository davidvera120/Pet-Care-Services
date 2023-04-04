
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState} from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, Input2, Select1, Input3, CardUser } from '../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux'
import { addPet } from "../Redux/Actions/candidateAction";
import hvmascota2 from '../images/hvmascota2.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router';

const MySwal = withReactContent(Swal)

export const Modal2 = () => {
  const navigate = useNavigate();
const [abierto, setabierto]= useState(false)

const funcionModal = (valor) => {

setabierto(valor)

}

const user  = useSelector( state => state.login )
    console.log(user)
    const id1=user.id;
    console.log(id1)

const [raza, setRaza]= useState('')
const [fechaN, setFechaN] = useState('')
const [name, setName]=useState('')
const [genero, setGenero]=useState('')
const [edad, setEdad] = useState('')
const [saludable, setSalud] = useState('')
const [vacuna, setVacuna] = useState('')
const [desparacitado, setDesparacitado] = useState('')
const [Uvacuna, setUltimaV] = useState('')
const [Udesparacitado, setUltimaD] = useState('')
const [recomendaciones, setRecomendaciones] = useState('')
const [salud2, setSalud2] = useState('')
const [comportamiento, setComportamiento] = useState('')
const [especie, setEspecie] = useState('')
const [foto, setImage] = useState('')
const [loading, setLoading] = useState(false)

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
const dispatch = useDispatch();
const DatosMascota= async (e) => {
e.preventDefault()

dispatch(addPet({name: name, foto: foto, especie: especie, raza: raza, genero: genero, edad: edad, fechaN:fechaN, saludable: saludable, vacunado: vacuna, desparacitado:desparacitado, fechaUltimaV:Uvacuna, fechaUltimaD:Udesparacitado, recomendaciones: recomendaciones, comportamiento: comportamiento, salud2: salud2}, id1));
MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>Welcome Back</i>,
  icon: 'success'
})
navigate('/home1');
}

  return (
    <div>
  
    <button className="custom-btn2 btn-2 flex-fill" onClick={()=>{funcionModal(true)}}>
     
    <div className="col-12">
    <div className="row">
   
    <div className="col-2">
    <div className="container img-fluid" Style="">
    <img src={hvmascota2} alt="" Style="height:100px;width:100px; margin-left:-37px; margin-top:-10px;border-radius:5px;"/>
    </div>
    </div>
    <div className="col-8" Style="margin-left:0px">
    <h2 Style="font-size:20px; margin-top:30px">Hoja de vida Mascota</h2>
   
    </div>
    <div className="col-2">
    <i className='bx bxl-baidu' Style="font-size:45px; margin-top:15px"></i>
    </div>
    </div>
    </div>
    
    </button>
   

<Modal isOpen={abierto}>

    <ModalHeader>
    <button onClick={()=>{funcionModal(false)}} Style="background-color:none; border:none;"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:900; font-size:20px;">Registro Datos Mascota</span>
    </ModalHeader>
         <ModalBody>
         <div className="col-12">
         <div className="container" Style="justify-content: center;aling-items:center;">
         <Singupfrm>
         <Form onSubmit={DatosMascota}>
         <div className="container d-flex" Style="justify-content: center;aling-items:center;">
         <div className="col-6" Style="margin-right:10px;">
         <InputContainer className="mb-3 mt-4">
         <h6 Style="margin-left:-80px">Nombre:</h6>
         <Input2 type="text" name="name"   onChange={(e) => setName(e.target.value)} placeholder="nombre"/>
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6>Especie:</h6>
       <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
       <Input3 type="checkbox" value="hembra"  onChange={(e) => setEspecie(e.target.value)}/>
       <h6 className="card1h6" >Perro</h6>
       <Input3 type="checkbox" value="macho"  onChange={(e) => setEspecie(e.target.value)}/>
       <h6 className="card1h6" >Gato</h6>
       </div>  
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 Style="margin-left:-80px">Raza:</h6>
         <Input2 type="text" name="raza"   onChange={(e) => setRaza(e.target.value)} placeholder="raza"/>
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6>Genero:</h6>
       <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
       <Input3 type="checkbox" value="hembra"  onChange={(e) => setGenero(e.target.value)}/>
       <h6 className="card1h6" >Hembra</h6>
       <Input3 type="checkbox" value="macho"  onChange={(e) => setGenero(e.target.value)}/>
       <h6 className="card1h6" >Macho</h6>
       </div>  
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 Style="margin-left:-80px">Edad:</h6>
       <Input2 type="text" name="edad"  onChange={(e) => setEdad(e.target.value)} placeholder="edad"/>
     </InputContainer>
     <InputContainer className="mb-3 mt-4">
     <h6 Style="margin-bottom:15px">Fecha de Nacimiento:</h6>
     <Input2 type="date" name="nacimiento"  onChange={(e) => setFechaN(e.target.value)}/>
     </InputContainer>
       </div>
         <div className="col-6" Style="margin-right:10px;">
         <InputContainer className="mb-3 mt-4">
         <h6>Saludable <i className='bx bx-health'></i>:</h6>
         <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
         <Input3 type="checkbox" value="si"  onChange={(e) => setSalud(e.target.value)}/>
         <h6 className="card1h6" >Si</h6>
         <Input3 type="checkbox" value="no"  onChange={(e) => setSalud(e.target.value)}/>
         <h6 className="card1h6" >No</h6>
         </div>  
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 >Vacunado <i className='bx bx-injection' ></i>:</h6>
       <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
         <Input3 type="checkbox" value="si"  onChange={(e) => setVacuna(e.target.value)}/>
         <h6 className="card1h6" >Si</h6>
         <Input3 type="checkbox" value="no"  onChange={(e) => setVacuna(e.target.value)}/>
         <h6 className="card1h6" >No</h6>
         </div>  
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 Style="margin-bottom:15px">Ultima Fecha de <i className='bx bx-injection' ></i>:</h6>
       <Input2 type="date" name="telefono"  onChange={(e) => setUltimaV(e.target.value)}/>
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 >Desparcitado <i className='bx bxs-capsule' ></i>:</h6>
       <div className="container d-flex" Style="justify-content: center;aling-items:center; gap:10px;">
       <Input3 type="checkbox" value="si"  onChange={(e) => setDesparacitado(e.target.value)}/>
       <h6 className="card1h6" >Si</h6>
       <Input3 type="checkbox" value="no"  onChange={(e) => setDesparacitado(e.target.value)}/>
       <h6 className="card1h6" >No</h6>
       </div> 
       </InputContainer>
       <InputContainer className="mb-3 mt-4">
       <h6 Style="margin-bottom:15px">Ultima Fecha de <i className='bx bxs-capsule' ></i>:</h6>
       <Input2 type="date" name="direccion"  onChange={(e) => setUltimaD(e.target.value)}/>
     </InputContainer>
     
      </div>
</div>
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
<div className="col-12 mt-4">
<div className="container" Style="justify-content: center;aling-items:center;">

      <h6>Observaciones de Salud <i className='bx bx-health'></i>:</h6>
      <textarea name="textarea" rows="5" cols="44" onChange={(e) => setSalud2(e.target.value)} ></textarea>
  
    </div>
    </div>

    <div className="col-12 mt-3">
<div className="container" Style="justify-content: center;aling-items:center;">

      <h6>Datos de Comportamiento:</h6>
      <textarea name="textarea" rows="5" cols="44" onChange={(e) => setComportamiento(e.target.value)} ></textarea>
    </div>
    </div>

    <div className="col-12 mt-3">
    <div className="container" Style="justify-content: center;aling-items:center;">
    
          <h6>Recomendaciones:</h6>
          <textarea name="textarea" rows="5" cols="44" onChange={(e) => setRecomendaciones(e.target.value)} ></textarea>
       
        </div>
        </div>
        <ModalFooter>
        <div className="col-12 mt-3">
        <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Guardar

</button>
</div>
</div>
</ModalFooter>
       </Form>
       </Singupfrm>
       </div>
       </div>
     
         </ModalBody>

</Modal>

    </div>
  )
}

export default Modal2