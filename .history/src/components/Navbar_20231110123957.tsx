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
      <nav className='navbar '>
      <div className='navbar-container flex justify-between items-center bg-black'>
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
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/history'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                HISTORY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/volunteer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 VOLUNTEER
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 GALLERY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to='/volunteer'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                VOLUNTEER
              </Link>
            </li>
            <li>
              <Link
                to='/donate'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                DONATE
              </Link>
            </li>
            <li>
              <Link
                to='/contactus'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {button && (
            <Link to='/donate'>
              <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>DONATE</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
