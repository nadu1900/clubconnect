import React from 'react';
import { useParams } from 'react-router-dom';
import eventData from './Event.json';
import eventTData from './EventT.json';
import eventLaf from './LafMockData.json';
import eventMor from './MoravianMockData.json';
import './EventDetail.css'; // Import the CSS file

const EventDetail = () => {
    const { id } = useParams();
    const eventsData = [
        ...eventData.items,
        ...eventTData.items,
        ...eventLaf.items,
        ...eventMor.items
    ];
    const event = eventsData.find(event => event.id.toString() === id);

    if (!event) {
        return <div>Event not found!</div>;
    }

    return (
        <div className="event-detail">
            <h1>{event.name}</h1>
            <h2>{event.organizer}</h2>
            <p>{event.description}</p>
            {event.imageUrl && (
                <img src={event.imageUrl} className="event-image" alt={event.title} />
            )}
        </div>
    );
};

export default EventDetail;
