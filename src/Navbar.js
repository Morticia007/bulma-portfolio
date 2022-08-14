/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo-14.png';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronDown , faChevronRight} from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      workClicked: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  handleWorkClick = () => {
    console.log(this.state.workClicked);
    console.log('workClicked');
    this.setState((state) => ({ workClicked: !state.workClicked }));
  };
  render() {
    return (
      <>
        <div style={{ marginBottom: 100 }}>
          <nav
            style={{ height: 100 }}
            className='navbar is-spaced is-fixed-top'
            role='navigation'
            aria-label='main navigation'
          >
            <div className='is-hidden-desktop'>
              <Menu
                left
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                <Link
                  onClick={() => this.closeMenu()}
                  to='/'
                  className='navbar-item'
                >
                  Home
                </Link>

                <Link
                  onClick={() => this.closeMenu()}
                  to='about'
                  className='navbar-item'
                >
                  About
                </Link>
                <div onClick={this.handleWorkClick} className='navbar-item'>
                  Work <FontAwesomeIcon style={{marginLeft: 20 }} icon={this.state.workClicked ? faChevronDown : faChevronRight}/>
                  {this.state.workClicked ? (
                    <div>
                      <Link
                      style={{color: '#D1D1D1'}}
                        onClick={() => this.closeMenu()}
                        to='wif' 
                        className='navbar-item'
                      >
                        WIF
                      </Link>
                      <Link
                       style={{color: '#D1D1D1'}}
                        onClick={() => this.closeMenu()}
                        to='ere'
                        className='navbar-item'
                      >
                        ERE
                      </Link>
                      <Link
                       style={{color: '#D1D1D1'}}
                        onClick={() => this.closeMenu()}
                        to='linkedin'
                        className='navbar-item'
                      >
                        LinkedIn Chat Reply
                      </Link>
                    </div>
                  ) : null}
                </div>

                <nav
                  class='navbar'
                  role='navigation'
                  aria-label='dropdown navigation'
                ></nav>
                <Link
                  onClick={() => this.closeMenu()}
                  to='contact'
                  className='navbar-item'
                >
                  Contact
                </Link>
              </Menu>
            </div>
            <div className='navbar-brand is-hidden-touch'>
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
                      <Link to='wif' class='navbar-item'>
                        WIF
                      </Link>
                      <Link to='ere' class='navbar-item'>
                        Elder Racing Equipment
                      </Link>
                      <Link to='linkedin' class='navbar-item'>
                        LinkedIn Chat Reply
                      </Link>
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
}

export default Navbar;
