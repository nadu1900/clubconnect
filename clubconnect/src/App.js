import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Schools from './pages/Schools';
import Events from './pages/Events';
import About from './pages/About';

function App() {
  return (
    <div>
      {/* Adding the Routes for the Pages */}
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path= "/home" element = {<Home />} />
        <Route path= "/about" element = {<About />} />
        <Route path= "/events" element = {<Events />} />
        <Route path= "/schools" element = {<Schools />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
