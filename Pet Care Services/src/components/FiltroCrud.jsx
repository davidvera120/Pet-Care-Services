import React, {useEffect, useState} from 'react';


import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome, TextIntro2, CardPet } from '../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux';
import { listaPet2} from '../Redux/Actions/readMascotasAction';
import { listaUsers} from '../Redux/Actions/readUsersAction';
import { SpaRounded } from '@mui/icons-material';



export const FiltroCrud = () => {
    const [email, setEmail] = useState('');
    const [apellidos, setapellidos] = useState('');
    const [filtrado, setfiltrado]= useState([])
    const {Users} = useSelector(state => state.read4)
    console.log(Users)
    const dispatch = useDispatch();
    const {Pet2} = useSelector(state => state.read5)
    console.log(Pet2)

const filtroInfo1 = async(correo) => {
    const filtrado1 = Users.filter((elemento) =>{
        return elemento.email===correo 
    });
   
    const idf=filtrado1[0].id;
    dispatch(listaPet2(idf))

 }
 console.log(filtrado)
 
 
  return (
   
<div className="col-12" Style="margin-top:00px">
<div className="row">

<Singupfrm>
<Form >
<InputContainer className="mb-2 mt-3">
<h6 Style="margin-left:-200px">Email:</h6>
<Input1 type="text" name="name"   onChange={(e) => setEmail({ ...email, email: e.target.value })} placeholder="email"/>
</InputContainer>
</Form>
    </Singupfrm>
<div className="col-12 mb-3">
<div className="container d-flex" Style="justify-content: center;aling-items:center;">

<button className="custom-btn btn-1" onClick={()=>{filtroInfo1(email.email)} }><i className='bx bx-user' Style="margin-right:20px;"></i>Buscar</button>

</div>
</div>

<div className="container d-flex flex-wrap">
   
  {
    Pet2?.map(elemento =>(
    
  
    
      <CardPet>
      <div className="container d-flex" Style="justify-content:center;aling-items:center;flex-wrap:wrap;">

          <div className="col">
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">

                  <img src={elemento.foto} alt="" Style="height:10em;width:10em; margin-top:20px; border-radius:50%" />
              </div>
          </div>

          <div className="col mt-4" Style="justify-content:centert;aling-items:center;flex-basis:280px;">
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Nombre:</h6><h6 className="cardh6">{elemento.name}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Raza:</h6><h6 className="cardh6">{elemento.raza}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Genero:</h6><h6 className="cardh6">{elemento.genero}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Edad:</h6><h6 className="cardh6">{elemento.edad}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Saludable:</h6><h6 className="cardh6">{elemento.saludable}</h6>
              </div>
          </div>


          <div className="col mt-3" Style="justify-content:center;aling-items:center;flex-basis:280px;">
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Fecha de Nacimiento:</h6><h6 className="cardh6">{elemento.fechaN}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Vacunado <i className='bx bx-injection'></i>:</h6><h6 className="cardh6">{elemento.vacunado}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:start;">
                  <h6>Fecha Ultima Vacuna <i className='bx bx-injection'></i>:</h6><h6 className="cardh6">{elemento.fechaUltimaV}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">
                  <h6>Desparacitado <i className='bx bxs-capsule'></i>:</h6><h6 className="cardh6">{elemento.desparacitado}</h6>
              </div>
              <div className="container d-flex" Style="justify-content:flex-start;aling-items:center;">
                  <h6>Fecha Ultima <i className='bx bxs-capsule'></i>:</h6><h6 className="cardh6">{elemento.fechaUltimaD}</h6>
              </div>
          </div>
      </div>
 <div className="col">
          <div className="container d-flex" Style="justify-content:center;aling-items:center;flex-basis:280px;flex-wrap:wrap; margin-top:-30px;">
              <div className="col">
                  <div className="container" Style="justify-content:flex-start;aling-items:center;">
                      <h6>Observaciones de Salud:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.salud2}</p>

                  </div>
              </div>

              <div className="col" Style="justify-content:centert;aling-items:center;">
                  <div className="container" Style="justify-content:flex-start;aling-items:start;">
                      <h6>Datos de Comportamiento:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.comportamiento}</p>
                  </div>
              </div>


              <div className="col" Style="justify-content:center;aling-items:center;">
                  <div className="container" Style="justify-content:flex-start;aling-items:start;">
                      <h6>Recomendaciones:</h6><p className="cardh6" Style="width:21em; height:12em">{elemento.recomendaciones}</p>
                  </div>
              </div>
          </div>
      </div>

      </CardPet> 
    ))  
}
 
</div>

</div>
</div>

  )
}

export default FiltroCrud



