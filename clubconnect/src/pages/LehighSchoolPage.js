import React from 'react';
import { Link } from 'react-router-dom';
import './LehighSchoolPage.css';
import LehighData from "../data/LehighData";
import EventManager from "../components/EventManager";
import NavBar from '../components/NavBar';

const LehighSchoolPage = () => {
  return (
    <div className="school-page">
      <h1>Club Connect</h1>
      <NavBar/>
      <header>
        <h1 className="school-name">Lehigh University</h1>
      </header>
      
      <section className="image-section">
        <img src="https://www.appily.com/sites/default/files/styles/max_1200/public/images/hero/college/213543_hero.jpg?itok=cYh0CRvU" alt="Lehigh University" className="center-image" />
      </section>

      <section className="about-section">
        <h2>About</h2>
        <p>Lehigh is a community of future makers. The 7,000+ undergraduate and graduate students on our picturesque campus are inspired to think deeply, driven to create pragmatic solutions, and encouraged to innovate collaboratively. Our faculty and staff are committed to creating an inclusive and dynamic community dedicated to positively impacting the future.</p>
        <a href="https://lehigh.edu/" className="website-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
      </section>


      <section className="events-section">
<EventManager initialSchool="lehigh"/>
      </section>
      <footer>
        <Link to="/schools" className="back-link">Back to Schools</Link>
      </footer>
    </div>
  );
};

export default LehighSchoolPage;
