import React, { useState } from 'react';

import './Summary.css';
import '../../Components/Button/Button.css';
import photo from '../../assets/img/photo.jpg';

import TitlePage from '../../Components/TitlePage/TitlePage';
import { FaGithub } from 'react-icons/fa';
import CurriculumVitae from '../../pages/CurriculumVitae/CurriculumVitae';

function Summary(){
  const [openModal, setOpenModal] = useState(false);
  return(
    <section className="container">
      <TitlePage title="Summary" />
      <div className="summary">
        <article className="summary__text-area">
          <section className="title-area">
            <h3 className="title">DuH Nunes</h3>
            <h2 className="profession">FrontEnd Developer</h2>
          </section>
          <p className="summary-text">Minha entrada nessa jornada de <span className="frontend">FrontEnd</span> começou lá atrás em <i>2007</i> com o antigo <b><i>BlogSpot</i></b>. Nele eu aprendi o básico de customização e criação de sites.
          </p>
          
          <p className="summary-text">
          Eu gostei do que eu estava fazendo com os blogs e resolvi me aprofundar com <b><i>DreamWeaver</i></b>, assim aprendendo a construir a estrutura dos sites, com pastas e arquivos organizados e separados. Os anos se passaram e eu fiz alguns sites, mas houve um grande hiato por volta de <i>2010</i> até <i>2017</i>.
          </p>

          <p className="summary-text">
          Em <i>2017</i> eu conheci o <b><i>BootStrap</i></b> e utilizei ele para criar alguns sites até <i>2021</i>. No final de <i>2022</i> eu resolvi focar em estudar e me dedicar em tempo integral a essa minha paixão e transformá-la em uma carreira. Hoje busco me aperfeiçoar em <b><i>HTML</i></b>, <b><i>CSS</i></b>, <b><i>JAVASCRIPT</i></b> e <b><i>REACT</i></b>, para alcançar um design moderno, rápido e responsivo com essas tecnologias.
          </p>

          <section className="btn-area btn-blue">
            <button type="button" className="btn" onClick={()=> setOpenModal(true)}>View CV</button>
            <span className="divisor-btn"></span>
            <div className="social-btn-area">
              <a
                href="https://github.com/duhnunes" className="social-icon"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </section>
        </article>
        <img src={photo} alt="DuH Nunes Photo" className="photo" />
      </div>
      <CurriculumVitae isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </section>
  );
}

export default Summary;
