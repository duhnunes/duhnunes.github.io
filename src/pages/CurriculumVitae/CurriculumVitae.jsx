import React from 'react';
import PropTypes from 'prop-types';

import './CurriulumVitae.css';

// Icons
// import {FaPrint, FaDownload} from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaLinkedin, FaGithub, FaCalendarAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiVisualstudiocode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

function CurriculumVitae({isOpen, setModalOpen}){
  if(isOpen) {
    return(
      <section className="cv-page">
        <div className="cv-container">
          {/* NAVBAR */}
          <nav className="navbar-curriculum">
            <h2 className="cv-title">Curriculum Vitae</h2>
            {/* ICON 1  */}
            {/* <button type="button" className="cv-span-icon">
              <FaDownload />
              <p className="cv-text-icon">Download</p>
            </button> */}
            {/* ICON 2  */}
            {/* <button type="button" className="cv-span-icon">
              <FaPrint />
              <p className="cv-text-icon">Imprimir</p>
            </button> */}
            <button
              type="button"
              className="cv-span-icon cv-close-page"
              onClick={setModalOpen}>
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
                  <a href="mailto:duhnunes.dev@gmail.com" rel="noreferrer">
                    <strong>duhnunes.dev@gmail.com</strong>
                  </a>
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
              <div className="cv-info-middle-links">
                <div className="linkedin">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/duhnunes/" target="_blank" rel="noreferrer">DuHNunes</a>
                </div>
                <div className="github">
                  <FaGithub />
                  <a href="https://github.com/duhnunes" target="_blank" className="github" rel="noreferrer">DuHNunes</a>
                </div>
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
                {/* WORK 1 */}
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
                <span className="divisor"></span>
  
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
                <span className="divisor"></span>
                {/* EDUC 2 */}
                <section className="cv-educ-body">
                  <h3 className="cv-educ-exp-title">Desenvolvimento Web</h3>
                  <p className="cv-educ-school">Recode</p>
                  <span className="cv-educ-date">
                    <FaCalendarAlt />
                    jul/2023 - set/2023
                  </span>
                  <span className="cv-educ-loc">
                    <FaLocationDot />
                    EAD/RJ, Brasil
                  </span>
                </section>
                <span className="divisor"></span>
                
              </div>
            </article>
          </section>
        </div>
      </section>
    );
  }
  return null;
}

export default CurriculumVitae;

CurriculumVitae.propTypes = {
  src: PropTypes.bool
}.isRequired;
