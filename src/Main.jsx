import React from 'react';
import Projects from './layouts/Projects/Projects';
import Skills from './layouts/Skills/Skills';
import Changelog from './layouts/Changelog/Changelog';
import ChangeColor from './Components/ChangeColor/ChangeColor';

function Main() {
  return (
    <main>
      <ChangeColor />
      <Projects />
      <Skills />
      <Changelog />
    </main>
  );
}

export default Main;
