import React, { useState, useEffect } from 'react';

function FetchData() {
  const [events, setEvents] = useState([]);
 // const [loading, setLoading] = useState(true);
 // const [error, setError] = useState(null);
  const url = "https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89";

  const fetchInfo = () => {
     return fetch(url, {
      header: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': 'https://l'
      }
    })

      .then(res => res.json())
      .then(d => setEvents(d));
  };

  useEffect(() => {
    fetchInfo();
            
  },[])

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {events.map((dataObj, index) => {
          return (
            <div
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );

}

export default FetchData;



// import React, { useState, useEffect } from 'react';


// function FetchData() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
    
//         const response = await fetch('https://engage-api.campuslabs.com/api/v3.0/events/event?excludeCoHosts=true&includeSubmissionIds=true&IncludeRsvpCounts=true&key=esk_test_b3de37458fa25302baed2b212950fd89', {
//           method: 'GET',
//           mode: 'no-cors',
//           header: {
//             'Content-Type': 'application/json*',
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin, Accept, X-Requested-With  ',
//             'Access-Control-Allow-Origin': 'https://engage-api.campuslabs.com',   
//             'Host': 'localhost:3000', 
//             'Origin': 'https://engage-api.campuslabs.com',
//             'Cache-Control': 'no-cache',
//             'Allow': 'GET, POST',
//             'Vary': 'Accept-Encoding',
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const data = await response.json();
//         setEvents(data.items);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) return <div>Loading events...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Events</h1>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>{event.name}</li>
//         ))}
//       </ul>
//     </div>
//     //callback function, 
//     //that function will take the data inn
//     //use effect call callback function
//     // fetch from callback function 
//     // 
//   );
// }

// export default FetchData;