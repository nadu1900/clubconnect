<<<<<<< HEAD
// exporting the header component into this file
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
=======
import React from 'react';
// import { EventData, EventPageButton } from '../data/EventData'; // Import named exports
import { SchoolData, SchoolPageButton } from '../data/SchoolData'; // Import named exports and SchoolCards component
import '../styles/Home.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import FilteredEvents from "../data/FilteredEvents"; // Import FilteredEvents component
import CallBack from "../data/CallBack";
>>>>>>> origin/Develop



export default function Home() {
<<<<<<< HEAD
    return (
        <>
            <Header />  
            <SearchBar />
            <h2>Welcome to ClubConnect</h2>
            <p>Explore our platform:</p>
         
       
        </>

    )
}
=======
  return (
    <>
      <h1>ClubConnect</h1>
  
      {/* Display Event Data */}
      {/* EventPageButton */}
      <NavBar />
      <FilteredEvents />
      <SearchBar /> 
      {/* <EventPageButton /> */}
      <div className="event-container">
        {/* <EventData /> */}
        <CallBack />
        
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
>>>>>>> origin/Develop
