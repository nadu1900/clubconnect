import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import orgData from '../data/LehighOrgs.json'; 
import orgLaf from '../data/LafOrgs.json';
import orgMor from '../data/MoravianOrgs.json';
import eventData from './Event.json';
import eventTData from './EventT.json';
import eventLaf from './LafMockData.json';
import eventMor from './MoravianMockData.json'; 
import NavBar from '../components/NavBar';
import './OrgDetail.css';
const OrgDetail = () => {

 const { id } = useParams();
    const [organization, setOrganization] = useState(null);
    const [relatedEvents, setRelatedEvents] = useState([]);

    useEffect(() => {
        const organizationsData = [...orgData.items, ...orgLaf.items, ...orgMor.items];
        const foundOrganization = organizationsData.find(org => org.organizationId.toString() === id);
        console.log("Organization found:", foundOrganization);  // Log to check what we find
        setOrganization(foundOrganization);
    }, [id]);

    useEffect(() => {
        if (organization) {
            const allEvents = [...eventData.items, ...eventTData.items, ...eventLaf.items, ...eventMor.items];
            const eventsForOrg = allEvents.filter(event => event.organizationId.toString() === organization.organizationId.toString());
            setRelatedEvents(eventsForOrg);
        } else {
            console.log("No organization loaded yet.");
        }
    }, [organization]);

    if (!organization) {
        console.log("Organization not found or still loading...");  // Log for debugging
        return <div>Organization not found!</div>;
    }

    return (
        <div className="organization-detail">
            <NavBar />
            <h1 className='hea'>{organization.name}</h1>
            <h2>{organization.type}</h2>
            <p>{organization.description}</p>
            {organization.imageUrl && (
                <img src={organization.imageUrl} className="organization-image" alt={organization.name} />
            )}

            <p> Contact info 
            <p> {organization.contactInfo.email}<br></br>
            {organization.contactInfo.phone} </p>
           </p>

            <h3>Related Events</h3>
            <div className='related-events-container'>
            {relatedEvents.length > 0 ? (
                relatedEvents.map(event => (
                    <Link to={`/event/${event.id}`} key={event.id} className="related-event">
                        <h4>{event.name}</h4>
                        <p>{event.description}</p>
                         {event.imageUrl && (
                <img src={event.imageUrl} className="event-image" alt={event.title} />
            )}
                    </Link>
                ))
            ) : (
                <p>No events found for this organization.</p>
            )}
        </div></div>
    );
};



export default OrgDetail;
