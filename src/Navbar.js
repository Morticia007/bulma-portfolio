/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo-14.png';

function Navbar() {
  return (
    <>
      <div className='container-fluid is-hidden-desktop'>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to='/' className='navbar-item'>
            <img alt='logo' src={logo} />
          </Link>
          <Link style={{ marginLeft: 'auto' }} to='/' className='navbar-item'>
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
      <div className='container-fluid is-hidden-mobile'>
        <nav
          style={{ height: 96 }}
          className='navbar is-spaced'
          role='navigation'
          aria-label='main navigation'
        >
          <div className='navbar-brand'>
            <a className='navbar-item' href='https://jacquelynhagman.design'>
              <img alt='logo`' style={{ maxHeight: 86 }} src={logo} />
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
              <nav
                class='navbar'
                role='navigation'
                aria-label='dropdown navigation'
              >
                <div class='navbar-item has-dropdown is-hoverable'>
                  <a class='navbar-link'>Work</a>

                  <div class='navbar-dropdown'>
                    <Link to='wif' class='navbar-item'>WIF</Link>
                    <Link to='ere' class='navbar-item'>Elder Racing Equipment</Link>
                  </div>
                </div>
              </nav>
              <Link to='contact' className='navbar-item'>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
