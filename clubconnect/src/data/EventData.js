// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const EventPageButton = () => (
//   <Link to="/events">
//     <button className="events-button">All Events</button>
//   </Link>
// );

// function EventData() {

//   const [events, setEvents] = useState([]);

//   const fetchInfo = () => {
//     url = 'https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89'
//     return fetch(url)
//       .then(res => res.json())
//       .then(d => setEvents(d));
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, fetch)

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Fetch event data from the API
//         const response = await fetch('https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89', {
//           method: 'GET',
//           mode: 'no-cors',
//           header: {
//             'Content-Type': 'application/json*',
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//             // 'Access-Control-Allow-Origin': '*',
//           }

//         });


//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const eventData = await response.json();

//         // Normalize the data
//         const normalizedEvents = eventData.map(event => ({
//           id: event.id,
//           title: event.title,
//           date: event.starts_on, // Assuming the start date is the event date
//           time: event.starts_on, // Assuming the start time is the event time
//           location: event.address.name, // Assuming address is nested under the event object
//           description: event.description
//         }));
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, [setEvents(normalizedEvents)]);

//   return (
//     <div>
//       {Array.isArray(events) && events.length > 0 ? (
//         events.map(event => (
//           <div key={event.id} className="event-card">
//             <h3>{event.title}</h3>
//             <p>{event.date}, {event.time}</p>
//             <p>{event.location}</p>
//             <p>{event.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No events available</p>
//       )}
//     </div>
//   );
// };

// export { EventData, EventPageButton };
