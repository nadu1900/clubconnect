import React, { useState } from 'react';
import eventData from '../data/Event.json';
import eventTData from '../data/EventT.json';
import eventLaf from '../data/LafMockData.json';
import eventMor from '../data/MoravianMockData.json';
import { Link } from 'react-router-dom';
import '../data/EventData.css';
import '../styles/EventContainer.css';

const EventContainer = () => {
  const events = [...eventTData.items, ...eventData.items, ...eventLaf.items, ...eventMor.items];
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsPerPage = 4;

  const nextEvents = () => {
    const maxIndex = Math.ceil(events.length / eventsPerPage) - 1;
    setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  const prevEvents = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const currentEvents = events.slice(
    currentIndex * eventsPerPage,
    (currentIndex + 1) * eventsPerPage
  );

  return (
    <div>  <button className="pagination-arrow left" onClick={prevEvents} disabled={currentIndex === 0}>
        &#8592;
      </button>
      <div className="event-container">
        {currentEvents.map(event => (
          <Link to={`/event/${event.id}`} key={event.id} className="event-card">
            <div className="event-info">
              <h2 className="event-name">{event.name}</h2>
              <p className="event-desc">{event.description}</p>
            </div>
            {event.imageUrl && (
              <img src={event.imageUrl} className="event-image" alt={event.name} />
            )}
          </Link>
        ))}

    
      </div>      <button className="pagination-arrow right" onClick={nextEvents} disabled={(currentIndex + 1) * eventsPerPage >= events.length}>
        &#8594;
      </button>
   
    </div>
  );
};

export default EventContainer;
