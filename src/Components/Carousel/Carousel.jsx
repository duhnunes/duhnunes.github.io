import React from 'react';

import card1 from '../../img/loginblur.png';
import './Carousel.css';
import Card from './Cards/Card';
import BtnCarousel from '../Button/BtnCarousel';

function Carousel(){
  return(
    <>
      <div className="carousel-btns">
        <BtnCarousel side="<" />
        <BtnCarousel side=">" />
      </div>
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
