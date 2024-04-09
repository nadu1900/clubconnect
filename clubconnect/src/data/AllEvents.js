import React, { useState, useEffect } from 'react';
import eventData from './Event.json';
import "../styles/AllEvents.css";

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set the events data from the local JSON file
    setEvents(eventData.items);
  }, []);

  return (
    <div className="eventContainer">
      <div className="header">
        <h1 className="title">Upcoming Events</h1>
        {/* Add any additional header elements if needed */}
      </div>
      <div className="eventList">
        {events.map(event => (
          <div key={event.id} className="eventItem">
            <div className="event">
              <h2 className="eventName">{event.name}</h2>
              {event.imageUrl && (
                <img src={event.imageUrl} className="eventImage" alt={event.name} />
              )}
              <p className="eventDescription">{event.description}</p>
              <p className="eventDate">{new Date(event.date).toDateString()}</p>
              {/* Add more details about the event if necessary */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDisplay;
