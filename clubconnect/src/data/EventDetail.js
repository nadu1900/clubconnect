import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import eventData from './Event.json';

const EventDetail = () => {

      const { id } = useParams();
        const event = eventData.items.find(event => event.id.toString() === id);
    
        if (!event) {
            return <div>Event not found!</div>;
        }
   
    if (!event) {
        return <div>Loading event details...</div>;
    }

    return (
        <div className="event-detail">
            <h1>{event.title}</h1> {/* Event title */}
            <h2>{event.organizer}</h2> {/* Event organizer */}
            <p>{event.description}</p> {/* Event description */}
            <p>{new Date(event.date).toLocaleDateString()}</p> {/* Event date */}
        </div>
    );
};

export default EventDetail;
