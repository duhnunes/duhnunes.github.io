import React from 'react';

import './Header.css';
import Navbar from '../Navbar/Navbar';
import Summary from '../Summary/Summary';



function Header() {
  return(
    <header className="header">
      <Navbar />
      <Summary />
    </header>
  );
}

export default Header;
