import React from 'react';
import { SchoolData, SchoolPageButton } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import FilteredEvents from "../data/FilteredEvents"; // Import FilteredEvents component
import LehighData from "../data/LehighData";
import LafayetteData from "../data/LafayatteData";




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
      {/* Display School Data */}
      <SchoolPageButton />
      <div className="school-container">
        {SchoolData.map((school, index) => (
          <a key={index} href={school.website} target="_blank" rel="noopener noreferrer" className="school-card">
            <div>
              <img src={school.image} alt={school.name} />
              <h3>{school.name}</h3>
              <p>{school.location}</p>
              <p>{school.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
