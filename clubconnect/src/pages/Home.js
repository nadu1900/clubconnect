import React from 'react';
<<<<<<< HEAD
// import { EventData, EventPageButton } from '../data/EventData'; // Import named exports
import { SchoolData } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CallBack from "../data/CallBack";
import FilteredEvents from "../data/FilteredEvents";

import { Link } from 'react-router-dom';
=======
import { SchoolData, SchoolPageButton } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import FilteredEvents from "../data/FilteredEvents"; // Import FilteredEvents component
import LehighData from "../data/LehighData";
import LafayetteData from "../data/LafayatteData";
>>>>>>> Develop




export default function Home() {
  return (
    <>
      <h1>ClubConnect</h1>
      <NavBar />
<<<<<<< HEAD
      <SearchBar />
      <FilteredEvents />
      <div className="event-container">
        <CallBack />
=======
      <SearchBar /> 
      <div className="event-container">
        <LehighData />
        <LafayetteData />
        
>>>>>>> Develop
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
