import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schools from './pages/Schools';
import Events from './pages/Events';
import About from './pages/About';
import LehighSchoolPage from './pages/LehighSchoolPage';

const App = () => {
  return (
    <Router>
      <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools/lehigh" element={<LehighSchoolPage />} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
