import React from 'react';

import PropTypes from 'prop-types';
import './Button.css';

function Button({name, nameClass}){
  return <button type="button" className={nameClass}>{name}</button>;
}

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  nameClass: PropTypes.string
};
