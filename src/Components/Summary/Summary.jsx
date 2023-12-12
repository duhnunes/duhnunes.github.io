import React from 'react';
import photo from '../../img/duhnunes.jpg';

import './Summary.css';
import Button from '../Button/Button';
import TitlePage from '../TitlePage/TitlePage';

function Summary() {
    return(
        <section className="container">
            <TitlePage title="Summary" />
            <div className="summary">
                <article className="summary__text-area">
                    <div className="title-area">
                        <h3 className="title">DuH Nunes</h3>
                        <h2 className="profession">FrontEnd Developer</h2>
                    </div>
                    <p className="summary-text">Minha entrada nessa jornada de <span className="frontend">FrontEnd</span> começou lá atrás em <i>2007</i> com o antigo <b><i>BlogSpot</i></b>. Nele eu aprendi que era possível customizar um site de várias formas.
                    </p>
          
                    <p className="summary-text">
          Eu gostei do que eu estava fazendo com os blogs e comecei a pesquisar como fazer um do zero, descobrindo o <b><i>DreamWaver</i></b>, que possibilitava construir um site e visualizar como ele estava ficando em tempo real. Os anos se passaram e eu fiz alguns sites, mas houve um grande hiato por volta de <i>2009</i> até <i>2016</i>.
                    </p>

                    <p className="summary-text">
          Em <i>2018</i>, <i>2019</i> e <i>2021</i> fiz alguns sites utilizando <b><i>BootStrap</i></b>. No final de <i>2022</i> eu resolvi focar, estudar e me dedicar em tempo integral a essa minha paixão e transformá-la em uma carreira. Hoje busco me aperfeiçoar em <span className="html">HTML</span>, <span className="css">CSS</span> e <span className="react">REACT</span>, para alcançar um design moderno e rápido com a nova tecnologia.
                    </p>

                    <Button name="View CV" nameClass="btn btn-blue" />
                </article>
                <img src={photo} alt="DuH Nunes Foto" className="photo" />
            </div>
        </section>
    );
}

export default Summary;
