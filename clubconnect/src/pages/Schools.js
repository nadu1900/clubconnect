import React from 'react';
import { SchoolData } from '../data/SchoolData';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import '../pages/Schools.css';

export default function Schools() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="school-container-s"> {/* Unique class name */}
        {SchoolData.map((school, index) => (
          <Link key={school.id} to={`/schools/${school.slug}`} className="school-card-s"> {/* Unique class name */}
            <div>
              <img src={school.image} alt={school.name} className="school-logo-s" /> {/* Unique class name */}
              <h3 className="school-name-s">{school.name}</h3> {/* Unique class name */}
              <p className="school-info">{school.location}</p>
              <p className="school-info">{school.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
