import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/history'>Our History</Link>
            <Link to='/about-us'>Mission</Link>
            <Link to='/gallery'>Gallery</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Get Involved</h2>
            <Link to='/volunteer'>Volunteer</Link>
            <Link to='/donate'>Donate</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-us'>Contact Information</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Connect</h2>
            <Link to='//www.instagram.com' target='_blank'>Instagram</Link>
            <Link to='//www.facebook.com' target='_blank'>Facebook</Link>
            <Link to='//www.youtube.com' target='_blank'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='footer-credit'>
        <small className='website-rights'>SOCIAL PROJECT BALI © {new Date().getFullYear()}</small>
      </section>
    </footer>
  );
}

export default Footer;
