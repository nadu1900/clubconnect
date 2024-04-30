import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import eventData from './Event.json';
import eventTData from './EventT.json';
import eventLaf from './LafMockData.json';
import eventMor from './MoravianMockData.json'; 
import './EventDetail.css';
import NavBar from '../components/NavBar';
import orgData from '../data/LehighOrgs.json'; 
import orgLaf from '../data/LafOrgs.json';
import orgMor from '../data/MoravianOrgs.json';


const EventDetail = () => {
    const { id } = useParams();   
    const [organization, setOrganization] = useState(null);
    // Assuming each JSON file has an 'items' array, we combine all items into a single array.
    const eventsData = [
        ...eventData.items, 
        ...eventTData.items, 
        ...eventLaf.items, 
        ...eventMor.items
    ]; 
    
    const organizations = [...orgData.items, ...orgLaf.items, ...orgMor.items];
    const event = eventsData.find(event => event.id.toString() === id);

 useEffect(() => {
         if (event && event.organizationId) {
             const foundOrg = organizations.find(org => org.organizationId === event.organizationId);
             setOrganization(foundOrg);
         }
     }, [event, organizations]);

    if (!event) {
        return <div>Event not found!</div>;
    }

    return (
      
        <div className="event-detail"> 
         <NavBar/>
            <h1>{event.name}</h1> {/* Event title */}
            <h2>{event.organizer}</h2> {/* Event organizer */}
            <p>{event.description}</p> {/* Event description */}
            {event.imageUrl && (
                <img src={event.imageUrl} className="event-image" alt={event.title} />
            )}

 {organization && (
                <div>
                    <h2>Hosted by: <Link to={`/organization/${organization.organizationId}`}>{organization.name}</Link></h2>
                </div>
            )}

        </div>
    );
};

export default EventDetail;
