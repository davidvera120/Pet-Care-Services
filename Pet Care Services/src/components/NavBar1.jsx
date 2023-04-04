import React from 'react';
import portada1 from '../images/portada1.png'
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import Cookies from 'universal-cookie'

 const NavBar1 = () => {

    const uid  = useSelector( state => state.login)
    const name=uid.name;



    const logOut = () => {
        const cookies=new Cookies();
        cookies.remove('rol')
        window.location.reload();
        signOut(auth);
    }
        return (
          
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <img Style="height:70px " src={portada1} alt="portada1" />
       <a Style="margin-left:10px; color:rgb(0,70,148);">Bienvenido, {name}</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav position-absolute end-0 mx-3" Style="margin:10px;gap:12px;z-index:3; margin-right:50px;">
        <li className="nav-item">
        <Link to="/vistamascota" Style="text-decoration: none;color:rgb(0,70,148);"><a>Mi Mascota</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/home1" Style="text-decoration: none;color:rgb(0,70,148);"><i className='bx bx-user-circle' Style="font-size:25px;"></i></Link>
        </li>
        <li className="nav-item">
        <button Style="border:none; color:rgb(0,70,148)" onClick={()=>{logOut()}}>
        <i className='bx bx-log-out' Style="font-size:25px;"></i>
        </button>
        </li>
      </ul>
    </div>
  </div>
</nav>


        );
    }


export default NavBar1