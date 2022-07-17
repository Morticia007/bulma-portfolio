import React from "react";

function Navbar() {
  return (
    <div className='container-fluid'>
      <nav
        className='navbar is-spaced'
        role='navigation'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              style={{ maxHeight: 1400 }}
              src='https://uploads-ssl.webflow.com/62cfb7ce6b0d2a63aebe4954/62d3b19da73d908a4899505e_Vector.svg'
              width='200'
            />
          </a>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <a className='navbar-item'>Home</a>
            <a className='navbar-item'>About</a>
            <a className='navbar-item'>Work</a>
            <a className='navbar-item'>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
