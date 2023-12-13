import React from 'react';

import './Changelog.css';
import TitlePage from '../../Components/TitlePage/TitlePage';

function Changelog() {
  return(
    <section className="bg-alt" id="changelog">
      <TitlePage title="Changelog" />
      <div className="container changelog">
        <div className="log-area">
          {/* 2.1.1 */}
          <ul className="log-box">
            <li className="title">
              <h2>2.1.1</h2>
            </li>
            <li className="log-item">Improve Semantic Html</li>
            <li className="log-item">Navbar Fix Position</li>
            <li className="log-item">Navbar Fix Animation</li>
            <li className="log-item">Summary Fix Position</li>
            <li className="log-item">Otimizations for Mobile</li>
            <li className="log-item">Card Animation without hover for Mobile</li>
            <li className="log-item">Navbar Optimized for Mobile</li>
            <li className="log-item">Fix some inconsistencies with Mobile layout</li>
            <li className="log-item">Font auto-resize with ViewePort</li>
          </ul>
          {/* 2.1 */}
          <ul className="log-box">
            <li className="title">
              <h2>2.1</h2>
            </li>
            <li className="log-item">Footer</li>
            <li className="log-item">Animated Cards</li>
            <li className="log-item">Same otimization for mobile phone in Summary</li>
            <li className="log-item">Same customization for list style Changelog</li>
          </ul>

          {/* 2.0 */}
          <ul className="log-box">
            <li className="title">
              <h2>2.0</h2>
            </li>
            <li className="log-item">Remake portfolio with React (2023)</li>
            <li className="log-item">Navbar</li>
            <li className="log-item">Projects area</li>
            <li className="log-item">Skills area</li>
            <li className="log-item">Changelog area</li>
          </ul>
          
          {/* 1.0 */}
          <ul className="log-box">
            <li className="title">
              <h2>1.0</h2>
            </li>
            <li className="log-item">Change web site to Showcase using Bootstrap and Angular (2021)</li>
          </ul>

          {/* 0.2 */}
          <ul className="log-box">
            <li className="title">
              <h2>0.2</h2>
            </li>
            <li className="log-item">Bug Fixes</li>
            <li className="log-item">Add some animations</li>
          </ul>

          {/* 0.1 */}
          <ul className="log-box">
            <li className="title">
              <h2>0.1</h2>
            </li>
            <li className="log-item">Realease first Site using Bootstrap (2019)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Changelog;
