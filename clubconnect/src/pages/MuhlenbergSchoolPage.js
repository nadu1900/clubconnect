import React from 'react';
import { Link } from 'react-router-dom';


const MuhlenbergSchoolPage = () => {
    return (
      <div className="school-page">
        <header>
          <h1 className="school-name">Muhlenberg University</h1>
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
        </section>
        <footer>
          <Link to="/schools" className="back-link">Back to Schools</Link>
        </footer>
      </div>
    );
  };
  
  export default MuhlenbergSchoolPage;
  