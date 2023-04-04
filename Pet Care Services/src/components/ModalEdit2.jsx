
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState,useEffect} from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, Input2, Select1, Input3, CardUser, CardBoard } from '../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux'
import { editPet } from "../Redux/Actions/editAction";
import hvmascota2 from '../images/hvmascota2.png'
import {Link} from 'react-router-dom';
import {db} from '../firebase';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FiltroCrud from './FiltroCrud';
import {collection, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
const MySwal = withReactContent(Swal)


export const ModalEdit2 = () => {
    const navigate = useNavigate();
    const {id}=useParams();


const user  = useSelector( state => state.login )
    console.log(user)
    const id1=user.id;
    console.log(id1)

    const {Pet} = useSelector(state => state.read1)
    console.log(Pet)

    const [filtro, setFiltrado] = useState([])
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





    const filtrarServicios = async() => {
        const filtrado1 = Pet.filter((elemento) =>{
            return elemento.id===id 
        });
      console.log(filtrado1[0])
      const filtrado2=filtrado1[0]
      setRaza(filtrado2.raza)
      setName(filtrado2.name)
      setGenero(filtrado2.genero)
      setEdad(filtrado2.edad)
      setFechaN(filtrado2.fechaN)
      setImage(filtrado2.foto)
      setEspecie(filtrado2.especie)
setComportamiento(filtrado2.comportamiento)
setSalud2(filtrado2.salud2)
setRecomendaciones(filtrado2.recomendaciones)
setUltimaD(filtrado2.fechaUltimaD)
setUltimaV(filtrado2.fechaUltimaV)
setDesparacitado(filtrado2.desparacitado)
setVacuna(filtrado2.vacunado)
setSalud(filtrado2.saludable)

    }


    

    
    
    useEffect( () => {
        filtrarServicios()
        }, [])







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


dispatch(editPet({name: name, foto: foto, especie: especie, raza: raza, genero: genero, edad: edad, fechaN:fechaN, saludable: saludable, vacunado: vacuna, desparacitado:desparacitado, fechaUltimaV:Uvacuna, fechaUltimaD:Udesparacitado, recomendaciones: recomendaciones, comportamiento: comportamiento, salud2: salud2}, id1, id));
MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>Welcome Back</i>,
  icon: 'success'
})
navigate('/homep');
}

  return (
  <CardBoard>
         <div className="col" Style="flex-wrap:wrap;">
         <Link to="/homep" Style="background:none"> <button Style="background-color:none; border:none; margin:20px; font-size:25px;"><i className='bx bx-x-circle'></i></button></Link>
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
      </div>
</div>
<div className="mt-4">
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
        
        <div className="col-12 mt-3">
        <div className="container d-flex" Style="justify-content: center;aling-items:center;">
<button  className="custom-btn btn-1" type="submit">

Editar

</button>
</div>
</div>

       </Form>
       </Singupfrm>
       </div>
       </div>
       </CardBoard>
 
  )
}

export default ModalEdit2