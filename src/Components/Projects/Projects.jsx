import React from 'react';

import './Projects.css';
import TitlePage from '../TitlePage/TitlePage';
import Carousel from '../Carousel/Carousel';

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
