import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schools from './pages/Schools';
import Events from './pages/Events';
import About from './pages/About';
import Orgs from './pages/Orgs';
import LehighSchoolPage from './pages/LehighSchoolPage'; // Import the LehighSchoolPage component
import LafSchoolPage from './pages/LafSchoolPage'; // Import the LehighSchoolPage component
import MoravianSchoolPage from './pages/MoravianSchoolPage';
import MuhlenbergSchoolPage from './pages/MuhlenbergSchoolPage';
import EventDetail from './data/EventDetail';
import OrgDetail from './data/OrgDetail';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/organizations" element = {<Orgs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/event/:id" element={<EventDetail  />} />
          <Route path="/organization/:id" element={<OrgDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools/lehigh" element={<LehighSchoolPage />} />
          <Route path="/schools/lafayette" element={<LafSchoolPage />} />
          <Route path="/schools/moravian" element={<MoravianSchoolPage />} />
          <Route path="/schools/muhlenberg" element={<MuhlenbergSchoolPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
