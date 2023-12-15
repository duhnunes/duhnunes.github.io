import React from 'react';

import card1 from '../../assets/img/loginblur.png';
import './Carousel.css';
import Card from '../Cards/Card';

function Carousel(){
  return(
    <>
      <section className="carousel-box">
        <Card src={card1} alt="Blur Login" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default Carousel;
