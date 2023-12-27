import React from 'react';

import './Summary.css';

// import photo from '../../assets/img/loginblur.png';

import Button from '../../Components/Button/Button';
import TitlePage from '../../Components/TitlePage/TitlePage';
import { FaGithub } from 'react-icons/fa';

function Summary(){

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
          Eu gostei do que eu estava fazendo com os blogs e resolvi me aprofundar com <b><i>DreamWeaver</i></b>, que possibilitava construir um site e visualizar como ele estava ficando em tempo real. Os anos se passaram e eu fiz alguns sites, mas houve um grande hiato por volta de <i>2009</i> até <i>2016</i>.
          </p>

          <p className="summary-text">
          Em <i>2017</i> eu conheci o <b><i>BootStrap</i></b> e utilizei ele para criar alguns sites durante <i>2018</i>, <i>2019</i> e <i>2021</i>. No final de <i>2022</i> eu resolvi focar em estudar e me dedicar em tempo integral a essa minha paixão e transformá-la em uma carreira. Hoje busco me aperfeiçoar em <b><i>HTML</i></b>, <b><i>CSS</i></b>, <b><i>JAVASCRIPT</i></b> e <b><i>REACT</i></b>, para alcançar um design moderno, rápido e responsivo com essas tecnologias.
          </p>

          <section className="btn-area btn-blue">
            <Button name="View CV" nameClass="btn btn-blue" />
            <span className="divisor-btn"></span>
            <div className="social-btn-area">
              <a href="https://github.com/duhnunes" className="social-icon" target="__blank">
                <FaGithub />
              </a>
            </div>
          </section>
        </article>
        <img src="" alt="DuH Nunes Photo" className="photo" />
      </div>
    </section>
  );
}

export default Summary;
