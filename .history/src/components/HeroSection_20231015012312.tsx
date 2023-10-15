import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>SOCIAL PROJECT BALI</h1>
      <p className="w-3/4 justify-center">A Bali-based non-profit organization dedicated to advancing education, environmental conservation, and promoting social welfare.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DONATE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
