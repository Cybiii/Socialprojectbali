import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './components/pages/History';
import Volunteer from './components/pages/Volunteer';
import AboutUs from './components/pages/AboutUs';
import Donate from './components/pages/Donate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/aboutus' Component={AboutUs} />
          <Route path='/history' Component={History} />
          <Route path='/volunteer' Component={Volunteer} />
          <Route path='/donate' Component={Donate} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

