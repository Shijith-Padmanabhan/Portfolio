import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <li>
                <a className='navlink' href='/#about'>ABOUT</a>
            </li>
            <li>
                <a className='navlink' href='/#skills'>SKILLS</a>
            </li>
            <li>
                <a className='navlink' href='/#contact'>CONTACT</a>
            </li>
        </ul>
        <Outlet />
    </div>

  )
}

export default Navbar;