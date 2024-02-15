import React from 'react';
import Header from "../components/Header";
import { EventData, EventPageButton } from '../data/EventData'; // Import named exports
import { SchoolData, SchoolPageButton } from '../data/SchoolData'; // Import named exports
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <h2>Welcome to Club Connect!</h2>
      <p>Explore our platform:</p>
      {/* Display Event Data */}
      {/* EventPageButton */}
      <EventPageButton />
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

      {/* Display School Data */}
      <h2>Discover Schools</h2>
      <SchoolPageButton />
      <div className="school-container">
        {SchoolData.map(school => (
          <div key={school.id} className="school-card">
            <img src={school.image} alt={school.name} />
            <h3>{school.name}</h3>
            <p>{school.location}</p>
            <p>{school.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
