import React, { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import './GoTop.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const btnTop = document.querySelector('.top-btn');
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
        btnTop.style.display = 'block';
      } else {
        btnTop.style.display = 'none';
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
    <span className="btn top-btn">

      {showTopBtn && (
        <FaArrowUp
          className="btn-gotop"
          onClick={goToTop}
        />
      )}
    </span>
  );
};
export default ScrollToTop;
