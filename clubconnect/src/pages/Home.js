import React from 'react';
// import { EventData, EventPageButton } from '../data/EventData'; // Import named exports
import { SchoolData } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import LehighData from "../data/LehighData";
import LafayetteData from "../data/LafayatteData";
import FilteredEvents from "../data/FilteredEvents";

import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <>
      <h1>ClubConnect</h1>
      <NavBar />
      <SearchBar /> 
      <div className="event-container">
        <LehighData />
        <LafayetteData />
      
      </div>
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
