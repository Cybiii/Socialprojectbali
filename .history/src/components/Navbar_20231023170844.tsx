import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      <div className='navbar-container flex justify-between items-center'>
        <Link to='/' className='navbar-logo flex items-center flex-nowrap' onClick={closeMobileMenu}>
          <img src='/images/SPB_lgo.jpeg' alt="Logo" className="logo-image mr-4" />
          SOCIAL PROJECT BALI
          <i className='fab fa-typo3 ml-2' />
        </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={`flex ${click ? 'flex-col' : ''} ${click ? 'nav-menu active' : 'nav-menu'}`}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/history'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                History
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/volunteer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Volunteer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to='/volunteer'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                to='/donate'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to='/contactus'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Donate</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
