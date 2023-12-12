import React from 'react';
import PropTypes from 'prop-types';

import './TitlePage.css';

function TitlePage({title}){
  return <h1 className="title-page">{title}</h1>;
}

export default TitlePage;

TitlePage.propTypes = {
  title: PropTypes.string
};
