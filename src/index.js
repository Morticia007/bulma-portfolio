import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
