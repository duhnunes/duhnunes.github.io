import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

function Card({src}){
  return(
    <article className="card">
      <span className="lines"></span>
      <div className="imgBx">
        <img src={src} alt="Card" />
      </div>
    </article>
  );
}

export default Card;

Card.propTypes = {
  src: PropTypes.string
}.isRequired;
