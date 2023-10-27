import React, { useState, useEffect } from 'react';
import { Button } from './Button';

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
    <div className="w-4/5 h-[100vh] relative overflow-hidden">
      {images.map((imgSrc, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full transition-opacity duration-1000 ${currentImageIdx === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={imgSrc} alt="Slideshow Image" className="absolute w-full h-full object-cover" />
          <div className="absolute w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(29, 0, 77, 0.69) 37.5%, rgba(217, 217, 217, 0) 100%)' }}></div>
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-4/5">
        <h1 className="text-white font-bold text-7xl mb-4">SOCIAL PROJECT BALI</h1>
        <p className="text-white text-3xl mx-auto mb-8">A Bali-based non-profit organization dedicated to advancing education, environmental conservation, and promoting social welfare.</p>
        <div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            DONATE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
