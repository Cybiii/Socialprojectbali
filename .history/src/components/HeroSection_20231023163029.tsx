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
    <div className="w-full h-[75vh] relative overflow-hidden">
      {images.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt="Slideshow Image"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${currentImageIdx === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white font-bold text-6xl mb-4">SOCIAL PROJECT BALI</h1>
        <p className="text-white w-3/4 mx-auto mb-8">A Bali-based non-profit organization dedicated to advancing education, environmental conservation, and promoting social welfare.</p>
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
