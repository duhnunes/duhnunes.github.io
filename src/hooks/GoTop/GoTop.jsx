import React, { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import './GoTop.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  
  useEffect(() => {
    const btnTop = document.querySelector('.top-btn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
        btnTop.setAttribute('style', 'display:block;');
      } else {
        btnTop.removeAttribute('style');
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <span className="btn top-btn" onClick={goToTop}>

      {showTopBtn && (
        <FaArrowUp className="btn-gotop" />
      )}
    </span>
  );
};
export default ScrollToTop;
