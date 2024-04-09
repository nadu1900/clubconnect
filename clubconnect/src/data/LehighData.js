import React, { useState, useEffect } from 'react';
import eventData from './Event.json';
import eventTData from './EventT.json';
import './EventData.css';

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
<<<<<<< HEAD:clubconnect/src/data/CallBack.js
    // Set the events data from the local JSON file
    setEvents([...eventData.items], [...eventTData.items]);
    //setEvents();
=======
    setEvents(eventData.items);
>>>>>>> f6eba35da664c44f506286de36e4c11c5a194c3a:clubconnect/src/data/LehighData.js
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