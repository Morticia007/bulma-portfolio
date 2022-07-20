import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo-5.png';

function Navbar() {
  return (
    <div className='container-fluid'>
      <nav
        style={{ height: 96 }}
        className='navbar is-spaced'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://linkedin.com'>
            <img
              alt='logo`'
              style={{ maxHeight: 96 }}
              src={logo}
            />
          </a>
          <a
            href='https://linkedin.com'
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div
          style={{ fontWeight: 500 }}
          id='navbarBasicExample'
          className='navbar-menu'
        >
          <div className='navbar-end'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='about' className='navbar-item'>
              About
            </Link>
            <Link to='work' className='navbar-item'>
              Work
            </Link>
            <Link to='contact' className='navbar-item'>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
