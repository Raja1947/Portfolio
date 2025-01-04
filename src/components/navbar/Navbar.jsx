import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt=''/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
      
    </div>
  )
}

export default Navbar
