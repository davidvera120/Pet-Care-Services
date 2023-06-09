import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, CardInicio } from '../styles/PagIntro'
import { auth, createUserDocument } from "../firebase";
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import portada1 from '../images/portada1.png'
import { registerWithEmail } from "../Redux/Actions/userAction";


export function SingUp() {
 
  const [user, setUser] = useState({
    email: "",
    name:"",
    password: "",
  });

const reset = () => {
  setUser(" ")
}  

const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(registerWithEmail(user.email, user.password, user.name))
reset();
}



console.log(user);
  return (
  
    <div className="container margen">
   
 

     <CardInicio>
      <div className="col-12" Style="margin-top:100px">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
     <img Style="height:150px;" src={portada1} alt=""/>
      </div>
      </div>

      <div className="col-12 mt-5">
      <div className="container" Style="text-align:center">
      <TextIntro>
      <div className="col-12">
     <h2 Style="color:#8E8E8E">Create a new account</h2>
     </div>
     </TextIntro>
     </div>
     </div>
    

      <div className="col-12">
      <div className="row">
      <div className="col-12">
      <Singupfrm>

      <Form onSubmit={handleSubmit}>

      <InputContainer className="mb-2 mt-3">
      <Label htmlFor="email">Email</Label>
      <Input1 type="email" name="email"   onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="youremail@gmail.com"/>
    </InputContainer>
    <InputContainer className="mb-3 mt-3">
      <Label htmlFor="name">Name</Label>
      <Input1 type="text" name="name"   onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="username"/>
    </InputContainer>
    <InputContainer className="mb-2">
      <Label htmlFor="password">Password</Label>
      <Input1 type="password" name="password"  onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="*************"/>
    </InputContainer>
    <div className="col-12">
    <div className="row">
    <div className="container d-flex" Style="justify-content:center;">
    <ButtonIntro1>
    Register
    </ButtonIntro1>
  </div>
    </div>
    </div>
    </Form>
    </Singupfrm>
  </div>
</div>
</div>

      

     
    <div className="col-12">
    <div className="row">
    <div className="col-12" Style="margin-top:20px; font-weight:400; font-size:16px; text-align:center">
        <span Style="color:#8E8E8E">Already have an Account?</span>
        <Link to="/login" Style="color:#2250CC; margin-left:20px; text-decoration:none;">
          Login
        </Link>
      </div>
    </div>
    </div>
     
    </CardInicio>  
</div>


  );
}

