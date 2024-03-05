import React, { useState, useEffect } from 'react';



function FetchData() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
    
        const response = await fetch('https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89', {
          method: 'GET',

          header: {
            'Content-Type': 'application/json*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Origin': '*',



        
             
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;

