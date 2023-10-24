import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/aboutus' Component={AboutUs} />
          <Route path='/products' Component={Products} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

