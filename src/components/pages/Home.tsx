import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Gallery from './Gallery';

function Home() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <Cards />

    </>
  );
}

export default Home;
