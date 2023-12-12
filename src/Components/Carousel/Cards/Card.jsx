import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

function Card({src, alt}){
  return(
    <article className="card">
      <span className="lines"></span>
      <figure className="imgBx">
        <img src={src} alt={alt} className="card-img" />
      </figure>
    </article>
  );
}

export default Card;

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}.isRequired;
