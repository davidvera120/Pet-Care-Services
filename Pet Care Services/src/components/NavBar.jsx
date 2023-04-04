import React from 'react';
import portada1 from '../images/portada1.png'
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';

 const NavBar = () => {

    const uid  = useSelector( state => state.login)
    const name=uid.name;



    const logOut = () => {
     
        signOut(auth);
    }
        return (
            

            <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
  <img Style="height:70px " src={portada1} alt="portada1" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarNav">
      <ul className="navbar-nav position-absolute end-0 mx-3" Style="margin:10px;gap:12px; z-index:3">
        <li className="nav-item">
        <Link to="/login" Style="text-decoration: none;color:rgb(0,70,148);"><a>LogIn</a></Link>
        </li>
        <li className="nav-item" Style="margin-right:50px">
        <Link to="/singup"  Style="text-decoration: none;color:rgb(0,70,148);justify-content:end;"><a>SingUp</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        );
    }


export default NavBar;