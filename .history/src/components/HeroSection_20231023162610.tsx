import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const images = [
    '/images/Slider_1.png',
    '/images/Slider_2.png',
    '/images/Slider_3.png',
    '/images/Slider_4.png',
    '/images/Slider_5.png'
  ];

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  return (
    <div className='hero-container'>
      <img src={images[currentImageIdx]} alt="Slideshow Image" className='hero-background' />
      <h1>SOCIAL PROJECT BALI</h1>
      <p className='w-3/4 justify-center'>A Bali-based non-profit organization dedicated to advancing education, environmental conservation, and promoting social welfare.</p>
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
