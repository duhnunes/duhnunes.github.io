import React, { useEffect } from 'react';

import './ChangeColor.css';

function ChangeColor() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.color-item button');
    const prof = document.querySelector('.profession');
    const frontEnd = document.querySelector('.frontend');
    const btnCV = document.querySelector('.btn-area');
    const photo = document.querySelector('.photo');
    const navIcons = document.querySelectorAll('.nav-icon');

    const handleClick = (event) => {
      const isBtnClicked = event.target;

      if (isBtnClicked.classList.contains('th-blue')) {
        prof.setAttribute('class', 'profession');
        frontEnd.setAttribute('class', 'frontend');
        btnCV.setAttribute('class', 'btn-area btn-blue');
        photo.setAttribute('class', 'photo');
        navIcons.forEach((icon)=> {
          icon.setAttribute('class', 'nav-icon');
        });
      } else if (isBtnClicked.classList.contains('th-red')) {
        prof.setAttribute('class', 'profession -red');
        frontEnd.setAttribute('class', 'frontend -red');
        btnCV.setAttribute('class', 'btn-area btn-red');
        photo.setAttribute('class', 'photo -red');
        navIcons.forEach((icon)=> {
          icon.setAttribute('class', 'nav-icon -red');
        });
      } else if (isBtnClicked.classList.contains('th-pink')) {
        prof.setAttribute('class', 'profession -pink');
        frontEnd.setAttribute('class', 'frontend -pink');
        btnCV.setAttribute('class', 'btn-area btn-pink');
        photo.setAttribute('class', 'photo -pink');
        navIcons.forEach((icon)=> {
          icon.setAttribute('class', 'nav-icon -pink');
        });
      } else if (isBtnClicked.classList.contains('th-purple')) {
        prof.setAttribute('class', 'profession -purple');
        frontEnd.setAttribute('class', 'frontend -purple');
        btnCV.setAttribute('class', 'btn-area btn-purple');
        photo.setAttribute('class', 'photo -purple');
        navIcons.forEach((icon)=> {
          icon.setAttribute('class', 'nav-icon -purple');
        });
      }
    };

    buttons.forEach((btnTheme) => {
      btnTheme.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach((btnTheme) => {
        btnTheme.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section className="change-color">
      <span className="text-theme">Theme-Color</span>
      <ul className="menu-color">
        <li className="color-item">
          <button type="button" className="btn th-blue" title="Default"></button>
        </li>
        <li className="color-item">
          <button type="button" className="btn th-red"></button>
        </li>
        <li className="color-item">
          <button type="button" className="btn th-pink"></button>
        </li>
        <li className="color-item">
          <button type="button" className="btn th-purple"></button>
        </li>
      </ul>
    </section>
  );
}

export default ChangeColor;
