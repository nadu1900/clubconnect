import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventPageButton = () => (
  <Link to="/events">
    <button className="events-button">All Events</button>
  </Link>
);

const EventData = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch event data from the API
        const response = await fetch('https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventData = await response.json();

        // Normalize the data
        const normalizedEvents = eventData.map(event => ({
          id: event.id,
          title: event.title,
          date: event.starts_on, // Assuming the start date is the event date
          time: event.starts_on, // Assuming the start time is the event time
          location: event.address.name, // Assuming address is nested under the event object
          description: event.description
        }));

        setEvents(normalizedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {Array.isArray(events) && events.length > 0 ? (
        events.map(event => (
          <div key={event.id} className="event-card">
            {/* Remove image as it's not present in the normalized data */}
            <h3>{event.title}</h3>
            <p>{event.date}, {event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export { EventData, EventPageButton };
