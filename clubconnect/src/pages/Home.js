import React from 'react';
import { SchoolData } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import '../styles/SchoolData.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import EventContainer from './EventContainer';

import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <>
      <h1>ClubConnect</h1>
      <NavBar />
      <SearchBar />
        <EventContainer/>
      <div className="school-container">
        {SchoolData.map((school, index) => (
          <Link key={school.id} to={`/schools/${school.slug}`} className="school-card">
            <div>
              <img src={school.image} alt={school.name} />
              <h3>{school.name}</h3>
              <p>{school.location}</p>
              <p>{school.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
