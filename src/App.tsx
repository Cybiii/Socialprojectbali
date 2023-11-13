
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './components/pages/History';
import Volunteer from './components/pages/Volunteer';
import AboutUs from './components/pages/AboutUs';
import Donate from './components/pages/Donate';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/history' element={<History />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
