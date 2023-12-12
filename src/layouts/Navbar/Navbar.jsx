import React from 'react';

import './Navbar.css';
import { PiAddressBookFill } from 'react-icons/pi';
import { FaFileCode } from 'react-icons/fa6';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import { AiFillCode } from 'react-icons/ai';


function Navbar() {
  return(
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#projects" className="nav-icon">
            <PiProjectorScreenChartFill />
          </a>
          <span className="nav-text">Projects</span>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-icon">
            <FaFileCode />
          </a>
          <span className="nav-text">Skills</span>
        </li>
        <li className="nav-item">
          <a href="#history" className="nav-icon">
            <PiAddressBookFill />
          </a>
          <span className="nav-text">About</span>
        </li>
        <li className="nav-item">
          <a href="#changelog" className="nav-icon">
            <AiFillCode />
          </a>
          <span className="nav-text">Features</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
