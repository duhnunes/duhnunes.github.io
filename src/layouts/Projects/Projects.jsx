import React from 'react';

import './Projects.css';
import TitlePage from '../../Components/TitlePage/TitlePage';
import Card from '../../Components/Cards/Card';

// Project one
import project1 from '../../assets/img/loginblur.png';


function Projects() {
  return(
    <section className="bg-alt" id="projects">
      <TitlePage title="Projects" />
      <section className="container projects">
        <Card src={project1} />
        <Card src={project1} />
        <Card src={project1} />
        <Card src={project1} />
        <Card src={project1} />
        <Card src={project1} />
      </section>
    </section>
  );
}

export default Projects;
