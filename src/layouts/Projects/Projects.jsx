import React, {useState, useEffect} from 'react';

import './Projects.css';
import TitlePage from '../../Components/TitlePage/TitlePage';
import Card from '../../Components/Cards/Card';

// Project one
import fetchProducts from '../../lib/fetchProducts';


function Projects() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products);

  return(
    <section className="bg-alt" id="projects">
      <TitlePage title="Projects" />
      <section className="container projects">
        {products.map((project) => (
          <Card
            key={project.id}
            src={project.img}
            alt={project.alt}
          />
        ))}
      </section>
    </section>
  );
}

export default Projects;
