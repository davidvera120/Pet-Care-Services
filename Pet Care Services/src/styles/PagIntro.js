import styled from 'styled-components'; 
import {Link} from 'react-router-dom';




export const Container1 = styled.div`
    height:350px;
    width: 320px;
    border-radius: 15px;
     border: none;
    background-color: #f5f5f5;
 
      text-align: center;
      aling-items: center;
      justify-content: center;
  `



export const ButtonHome = styled.button`

  position: relative;
  outline: none;
  border: 1px solid #303030;
  background: #2E3562;
  color: #2BE7E8;
  letter-spacing: 2px;
  font-size: 11px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  height:35px;
  width:130px;
  justify-content:center;
  text-align: center;
 
 
 :hover {
  box-shadow: 0 0 10px #2BE7E8, 0 0 25px #001eff, 0 0 50px #2BE7E8;
  transition-delay: 0.6s;
 }
 
  span {
  position: absolute;
 }
 
  span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2BE7E8);
 }
 
 :hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
 }
 
  span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
 }
 
 :hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
 }
 
  span Link:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #2BE7E8);
 }
 
 :hover span :nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
 }
 
 span :nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
 }
 
 :hover span :nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
 }
 
 :active {
  background: #2BE7E8;
  background: linear-gradient(to top right, #2BE7E8, #001eff);
  color: #bfbfbf;
  box-shadow: 0 0 8px #2BE7E8, 0 0 8px #001eff, 0 0 8px #2BE7E8;
  transition: 0.1s;
 }
 
 :active span Link:nth-child(1) 
 span :nth-child(2) 
 span :nth-child(2) 
 span :nth-child(2) {
  transition: none;
  transition-delay: none;
 }

`

export const Buttonfilter = styled.button`
width: 57px;
height:20px;
text-align: center;
justify-content: center;
aling-items: center;
background: #2E3562;
border-radius: 37px;
font-size:10px;
font-weight:300;
margin:2px;
border-style:none;
:hover {
    box-shadow: 0 0 10px #2BE7E8, 0 0 25px #001eff, 0 0 50px #2BE7E8;
    transition-delay: 0.6s;
   }
`

export const Contenedor_foto = styled.div`
width:400px;
position:relative;
margin:auto;
margin-bootom:20px;
::before {
    content: '';
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    right:0;
    background-color: linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1));
}

`
export const CardUser = styled.div` 
    width: 19em;
    height: 30em;
    border-radius: 5px;
    margin-top:90px;
    background:none;
    border: 1.2px solid rgb(0,70,148);
    justify-content:center;
    text-aling:center;
   `

   export const CardBoard = styled.div` 
   width: 90%;
   margin:0 auto;
   max-width:1200px;
   min-width: 410px;
   min-height:100vh;
   margin-botom:30px;
   margin-top:30px;
   gap:3.5em;
   border-radius: 5px;
   display:flex;
   flex-wrap:wrap;
   justify-content:sapace-evenly;
   background: rgba( 255, 255, 255, 0.3 );
   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
   backdrop-filter: blur( 0.5px );
   -webkit-backdrop-filter: blur( 0.5px );
   border-radius: 10px;
   border: 1px solid rgba( 255, 255, 255, 0.18 );               
   `

   export const CardPet = styled.div` 
   width: 90%;
   margin:0 auto;
   max-width:1200px;
   min-width: 380px;
   min-height:50vh;
   margin-botom:30px;
   margin-top:30px;
   gap:3.5em;
   border-radius: 5px;
   display:flex;
   flex-wrap:wrap;
   justify-content:sapace-evenly;
   background: rgba( 255, 255, 255, 0.3 );
   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
   backdrop-filter: blur( 0.5px );
   -webkit-backdrop-filter: blur( 0.5px );
   border-radius: 10px;
   border: 1px solid rgba( 255, 255, 255, 0.18 ); 
  `

  export const CardInicio = styled.div` 
  width: 70%;
  margin:0 auto;
  max-width:900px;
  min-width: 450px;
  height:850px;
  min-height:800px;
  margin-botom:30px;
  margin-top:30px;
 
  border-radius: 5px;
 
  justify-content:center;
  background: rgba( 255, 255, 255, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0.5px );
  -webkit-backdrop-filter: blur( 0.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 ); 
 `

export const ButtonIntro = styled.button`

text-align: center;
justify-content: center;
aling-items: center;
font-size:14px;
font-weight:500;
border:none;
width: 358px;
height: 44px;
margin-top:120px;

color:rgba(75, 75, 75, 1);
background: #B0C3FD;
border-radius: 15px;
`

export const ButtonIntro2 = styled.button`
font-size:14px;
font-weight:500;
border:none;
text-align: center;
justify-content: center;
width: 358px;
height: 44px;
top: 200px;
color:rgba(75, 75, 75, 1);
background: #2E3562;
border-radius: 44px;

`

export const ButtonIntro1 = styled.button`

text-align: center;
justify-content: center;
aling-items: center;
font-size:23px;
font-weight:500;
border:none;
width: 158px;
height: 40px;
margin-top:20px;
color:rgb(46, 53, 98);
background: #B0C3FD;
border-radius: 44px;
position:relative;

`
export const ImgIntro = styled.div`
background: url(${({Image}) => Image && Image});
height:350px;
width:350px;
background-repeat: no-repeat;
aling-items: center;
text-align:center;
justify-content: center;
margin-top:-100px;
background-position: center;
`
export const TextIntro2 = styled.div`

height:320px;

border: 1px solid #B0C3FD;;
background:none;
border-radius:30px;
justify-content: center;
margin-left:0px;
display: flex;
color:white;
text-align:center;
`

export const TextIntro= styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top:-50px;

h2{ 
text-align: center;
justify-content: center;
font-style: normal;
font-weight: 700;
font-size: 24px;

}
h5{   

justify-content: center;
top: 80%;
bottom: 25.71%;
font-style: normal;
font-weight: 400;
font-size: 14px;

}
`

export const Singupfrm= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:0px;

`
export const Form= styled.form`
text-aling:center;
justify-content: center;
aling-items: center;
`
export const InputContainer= styled.div`
  position:relative;
    height: 45px;
    width: 90%;
    margin-bottom: 17px;
    text-align: center;
  
    
`

export const Input1= styled.input`
position:relative;
width: 358px;
height: 44px;
border: 1.3px solid rgb(0,70,148);
border-radius: 5px;
font-size: 14px;
padding: 0 20px;
outline: none;
background-color:none;
color:black;
box-shadow: 0.3em 0.3em 0.7em #bebebe;
z-index: 1;
&:focus{ top: -7px;
    border-color:  #39ff14;
 
    left: 2px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color:black;
    }
    &:not(:placeholder-shown){top: -7px;
        left: 2px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;}

`

export const Input3= styled.input`
position:relative;
border: 1.2px solid rgb(0,70,148);
height:30px;
border-radius: 50%;
font-size: 16px;
padding: 0 20px;
outline: none;
color:black;
z-index: 1;
&:focus{ top: -7px;
    border-color:  #39ff14;
    left: 2px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color:black;
    }
    &:not(:placeholder-shown){top: -7px;
        left: 2px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;}

`
export const Select1= styled.select`
position:relative;
width: 180px;
height: 35px;
border: 1.2px solid rgb(0,70,148);
border-radius: 5px;
font-size: 16px;
padding: 0 20px;
outline: none;
color: black;
background-color: none;
z-index: 1;
&:focus{ top: -7px;
    border-color:  #39ff14;
    left: 2px;
    z-index: 10;
    font-size: 14px;
    font-weight: 500;
   color: black;
    }
    &:not(:placeholder-shown){top: -7px;
        left: 2px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;}`

export const Input2= styled.input`
position:relative;
width: 180px;
height: 35px;
border: 1px solid rgb(0,70,148);
border-radius: 5px;
font-size: 16px;
padding: 0 20px;
outline: none;
box-shadow: 0.3em 0.3em 0.7em #bebebe;
background-color: none;
z-index: 1;
color:white;
margin-top:-20px;
&:focus{ top: -7px;
    border-color:  #39ff14;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 500;
   color: white;
    }
    &:not(:placeholder-shown){top: -7px;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;}
        `

export const Label= styled.label`
position: absolute;
text-align: center;
    margin-top: 3px;
    margin-left: 30px;
    padding: 0 4px;
    background:none;
    color: #B0C3FD;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
    &:focus{ top: -7px;
       border-color:   #39ff14;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;
        color:rgba(191, 195, 252, 1);}
   &:not(:placeholder-shown){top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;}

`


const Image = ({Image}) => {
    return(
        <ImgIntro Image={Image}></ImgIntro>
    )
    }
    
    export default Image;