import React from 'react';

import './Projects.css';
import TitlePage from '../../Components/TitlePage/TitlePage';
import Carousel from '../../Components/Carousel/Carousel';

function Projects() {
  return(
    <section className="bg-alt" id="projects">
      <TitlePage title="Projects" />
      <section className="container projects">
        <Carousel />
      </section>
    </section>
  );
}

export default Projects;
