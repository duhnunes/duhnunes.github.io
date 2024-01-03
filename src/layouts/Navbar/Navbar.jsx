import React from 'react';

import './Navbar.css';
import { PiAddressBookFill, PiProjectorScreenChartFill, PiFileCodeFill, PiCodeBlockDuotone } from 'react-icons/pi';


function Navbar() {
  return(
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#projects" className="nav-icon">
            <PiProjectorScreenChartFill />
          </a>
          <span className="nav-text">Projects</span>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-icon">
            <PiFileCodeFill />
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
            <PiCodeBlockDuotone className="fill-icon" />
          </a>
          <span className="nav-text">Features</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
