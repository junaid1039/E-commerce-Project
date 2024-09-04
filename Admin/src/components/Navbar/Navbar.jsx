import React from 'react'
import './navbar.css';
import logo from '../Media/logo.png';
import { MdOutlineAccountCircle } from "react-icons/md";


export const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt='Logo' className='navlogo'/>
        <MdOutlineAccountCircle/>
    </div>
  )
};
