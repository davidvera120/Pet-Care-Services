import styled from "styled-components";


export const NavBarStyled = styled.nav `
    height: 130px;
    width:100%;
    display: flex;
    justify-content: space-arround;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(46, 53, 98);
    margin-top: -20px;
    color: #B0C3FD;
  
` 

export const NavBarStyled1 = styled.nav `
    height: 40px;
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:10px;
    font-size:22px;
   
` 
export const BotonFlotante = styled.section`
    z-index: 999;
    margin-right: 1.5em;
    position: sticky;
    top: 80vh;
    float: right;
    
    svg{
        font-size: 3em;
        color: white ;
        background: #25D366;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const DivForm = styled.div`
display: grid;
grid-auto-flow: column;
gap: 1rem;

overscroll-behavior-x: contain;
scroll-snap-type: x mandatory;
scrollbar-width: none;
::-webkit-scrollbar {
    display: none;
}
`
export const ImgIntro1 = styled.div`
background:;
border-radius: 10%;
background-repeat: no-repeat;
    width: 270px;
    height: 220px;
    background-size: cover;
    background-position: center;
    margin-top:10px;
 
`
export const Producto=styled.div`
height:500px;
width: 500px;

`
export const ImgIntro2 = styled.div`
background:;
border-radius: 10%;
background-repeat: no-repeat;
    width: 270px;
    height: 220px;
    objet-fit: cover;
    scroll-snap-align: start;
  
    background-size: cover;
    background-position: center;
    margin-top:10px;
   
`



export const ButtonStyled = styled.button`
background-color: #8e44ad;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.3rem;
    color: white;
    &:hover {
        background-color: #732d91;
    }
    &:focus {
        outline: none;
        background-color: #5e3370;
    }`
   
   
   export const SpinnerStyled = styled.div`
        with: 100%;
        height: 90vh;
        background-color: #FFF;
        display: flex;
        justify-content:center;
        margin: 20%;
   `

   export const ContainerStyled = styled.div`
   background-color: #FFF;
   border-radius: 10px;
   box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
   width: 80%;
   padding: 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`
