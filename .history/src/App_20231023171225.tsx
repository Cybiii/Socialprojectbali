import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './components/pages/History';
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
          <Route path='/history' Component={History} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

