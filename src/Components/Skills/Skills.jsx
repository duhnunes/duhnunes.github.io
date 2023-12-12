import React from 'react';

import './Skills.css';
import TitlePage from '../TitlePage/TitlePage';

// Icons
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';

function Skills(){
  return(
    <section id="skills">
      <TitlePage title="Skills" />
      <div className="container skills">

        <div className="skills-grid">
          <FaHtml5 className="skills-icon html" />
          <FaCss3Alt className="skills-icon css" />
          <IoLogoJavascript className="skills-icon javascript" />
          <FaReact className="skills-icon react" />
        </div>

      </div>
    </section>
  );
}

export default Skills;
