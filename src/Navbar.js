import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo-14.png';

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
          <a className='navbar-item' href='https://jacquelynhagman.design'>
            <img
              alt='logo`'
              style={{ maxHeight: 86 }}
              src={logo}
            />
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
