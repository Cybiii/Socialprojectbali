import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './components/pages/History';
import volunteer from './components/pages/Volunteer';
import AboutUs from './components/pages/AboutUs';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;

