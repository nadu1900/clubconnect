import React, { useState, useEffect } from 'react';
import eventData from './Event.json';
// import './EventData.css'; 

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set the events data from the local JSON file
    setEvents(eventData.items);
  }, []);

  return (
    <div className="eventContainer">
      {events.map(event => (
        <div key={event.id} className="event">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.date}, {event.time}</p>
          <p>{event.location}</p>

        </div>
      ))}
    </div>
  );
}

export default EventDisplay;
