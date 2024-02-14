import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <li>
                <a href='/#about'>ABOUT</a>
            </li>
            <li>
                <a href='/#skills'>SKILLS</a>
            </li>
            <li>
                <a href='/#contact'>CONTACT</a>
            </li>
        </ul>
        <Outlet />
    </div>

  )
}

export default Navbar;