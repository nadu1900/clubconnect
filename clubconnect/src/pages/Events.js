// exporting the header component into this file
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { EventData } from "../data/EventData";
import React, { useState, useEffect } from 'react';
import FilteredEvents from "../data/FilteredEvents";

export default function Events(){

    
    return(
        <>
        <h1>ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <FilteredEvents />
        <h2> Events Page</h2>
         <div className="event-container">
        {EventData.map(event => ( // Changed from 'events' to 'EventData'
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}, {event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
        </>
    )
}