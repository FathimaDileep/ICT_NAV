import React from 'react';
import './Appbar.css'
import logo from "../../assets/logo.png";

const Appbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><button className='btn'>Home</button></li>
            <li>Courses</li>
            <li>Events</li>
            <li>About Us</li>
            
            
        </ul>
    </nav>
    
  )
}

export default Appbar
