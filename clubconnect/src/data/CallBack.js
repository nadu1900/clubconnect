import React, { useState, useEffect } from 'react';
import eventData from './Event.json';
import eventTData from './EventT.json';
import './EventData.css';

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set the events data from the local JSON file
    setEvents([...eventData.items], [...eventTData.items]);
  }, []);

  return (
    <div className="eventContainer">
      <div className="carousel">
        {events.map(event => (
          <div key={event.id} className="carouselItem">
            <div className="event">
              <h2 className="eventName">{event.name}</h2>
              {event.imageUrl && (
                <img src={event.imageUrl} className="eventImage" alt={event.name} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDisplay;