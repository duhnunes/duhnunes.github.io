import React from 'react';

import './CurriulumVitae.css';

import { FaDownload } from 'react-icons/fa';
import { FaPrint } from 'react-icons/fa';

// Icons
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

function CurriculumVitae(){

  return(
    <section className="cv-page">
      <div className="cv-container">
        {/* NAVBAR */}
        <nav className="navbar">
          <h2 className="cv-title">Curriculum Vitae</h2>
          {/* ICON 1  */}
          <button type="button" className="cv-span-icon">
            <FaDownload />
            <p className="cv-text-icon">Download</p>
          </button>
          {/* ICON 2  */}
          <button type="button" className="cv-span-icon">
            <FaPrint />
            <p className="cv-text-icon">Imprimir</p>
          </button>
          <button type="button" className="cv-span-icon cv-close-page">
            <IoMdClose />
          </button>
        </nav>

        {/* BODY CV */}
        <section className="cv-body">
          {/* HEADER */}
          <article className="cv-header">
            <div className="cv-body-title">
              <h1 className="cv-name">DuH Nunes</h1>
              <p className="cv-profission">FrontEnd Developer</p>
            </div>

            <div className="cv-infos">
              <span className="cv-email">
                <MdEmail />
                <strong>duhnunes.dev@gmail.com</strong>
              </span>
              {/* Skills */}
              <div className="cv-skills">
                <FaHtml5
                  className="cv-skills-icon html" />
                <FaCss3Alt
                  className="cv-skills-icon css" />
                <IoLogoJavascript
                  className="cv-skills-icon javascript" />
                <FaReact
                  className="cv-skills-icon react" />
                <SiVisualstudiocode
                  className="cv-skills-icon vscode" />
                <FaGitAlt
                  className="cv-skills-icon git" />
              </div>

            </div>

          </article>
          <article className="cv-info-middle">
            <span className="phone">
              <BsFillTelephoneFill />
              (21) 972-544-127
            </span>
            <span className="location">
              <FaLocationDot />
              Niterói - Rio de Janeiro, Brasil
            </span>
            <div className="linkedin">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/duhnunes/" target="_blank" rel="noreferrer">DuHNunes</a>
            </div>
            <div className="github">
              <FaGithub />
              <a href="https://github.com/duhnunes" target="_blank" className="github" rel="noreferrer">DuHNunes</a>
            </div>
          </article>
          <span className="divisor"></span>

          {/* BODY INSIDE */}
          <article className="cv-body-inside">
            {/* EXPERIENCE */}
            <div className="cv-exp">
              <section className="cv-exp-title__box">
                <h2 className="cv-exp-title">Work Experience</h2>
              </section>
              {/* BODY WORK EXPERIENCE */}
              <section className="cv-exp-body">
                <h3 className="cv-exp-work-title">
                  Auxiliar Geral de Loja
                </h3>
                <p className="cv-exp-brand">
                  Guedes e Pereira Mat. de Construção LTDA
                </p>
                <div className="cv-exp-loc-area">
                  <span className="cv-exp-loc-date">
                    <FaCalendarAlt />
                    2012 - 2017
                  </span>
                  <span className="cv-exp-loc">
                    <FaLocationDot />
                    Maravista - Niterói - RJ
                  </span>
                </div>
                <ul className="cv-exp-description-work">
                  <li className="cv-exp-desc-item">
                    Responsável por atendimento ao cliente, arrumação de estoque, verificação de mercadoria na entrada e saída da loja, pagamentos de boletos
                  </li>
                  <li className="cv-exp-desc-item">
                    Motorista/Ajudante de caminhão substituto
                  </li>
                </ul>
              </section>

            </div>
            {/* EDUCATION */}
            <div className="cv-education">
              <section className="cv-educ-title-box">
                <h2 className="cv-educ-title">
                  Education
                </h2>
              </section>
              {/* EDUC 1 */}
              <section className="cv-educ-body">
                <h3 className="cv-educ-exp-title">Médio Completo</h3>
                <p className="cv-educ-school">SAEI</p>
                <span className="cv-educ-date">
                  <FaCalendarAlt />
                  2016
                </span>
                <span className="cv-educ-loc">
                  <FaLocationDot />
                  RJ/RJ, Brasil
                </span>
              </section>
              
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default CurriculumVitae;
