import React, { useState, useEffect } from 'react';
import eventData from './LafMockData.json';
import './EventData.css';

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventData.items);
  }, []);
  return (
    <div className="eventContainer">
      <div className="carousel">
        {events.map(event => (
          <div key={event.id} className="carouselafItem">
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