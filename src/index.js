import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Main from './Main';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import GoTop from './hooks/GoTop/GoTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
    <GoTop />
  </React.StrictMode>
);
