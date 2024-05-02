import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { SchoolData } from '../data/SchoolData';
import { Link } from 'react-router-dom';
import banner from '../data/schoolimages/banner.jpeg';
import '../styles/Schools.css';

export default function Schools() {
  return (
    <>
      <div className="school-container-s">
        {SchoolData.map((school, index) => (
           <Link key={index} to={`/schools/${school.slug}`} className="school-card-s">
            <div>
              <img src={school.image} alt={school.name} className="school-card-s-img" />
              <h3 className="school-name-s">{school.name}</h3>
              <p className="school-info">{school.location}</p>
              <p className="school-info">{school.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <footer>
        <Link to="/home" className="back-link">Back to Home</Link>
      </footer>
    </>
  );
}
