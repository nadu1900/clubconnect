import React, { useState, useEffect } from 'react';
import eventData from './event.json';

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
        </div>
      ))}
    </div>
  );
}

export default EventDisplay;
