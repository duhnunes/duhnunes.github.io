import React from 'react';
import PropTypes from 'prop-types';

import './BtnCarousel.css';

function BtnCarousel({side}){
  return <button type="button" className="btn btn-carousel">{side}</button>;
}

export default BtnCarousel;

BtnCarousel.propTypes = {
  side: PropTypes.string
};
