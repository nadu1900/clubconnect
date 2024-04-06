import React from 'react';
import { Link } from 'react-router-dom';


const LafSchoolPage = () => {
    return (
      <div className="school-page">
        <header>
          <h1 className="school-name">Lafayette College</h1>
        </header>
        
        <section className="image-section">
          <img src="https://www.lafayette.edu/wp-content/uploads/2022/03/Homepage-pics_June2020-06-1-1440x810.jpg" alt="Lehigh University" className="center-image" />
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
  
  export default LafSchoolPage;
  