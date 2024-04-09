import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import "../styles/FilteredEvents.css";


const FilteredEvents = ({ filteredEvents = [], setSchoolFilter, setTimeFilter }) => {
    return (
        <div>
            <select onChange={e => setSchoolFilter(e.target.value)}>
                <option value="">All Schools</option>
                <option value="lehigh">Lehigh</option>
                <option value="techuniv">Tech University</option>
                <option value="lafayette">Lafayette University</option>
                <option value="morv"> Moravian </option>
            </select>
            <input type="date" onChange={e => setTimeFilter(e.target.value)} />


            <div className="event-container">
                {filteredEvents.map(event => (
                    // Wrap the card content with a Link
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
            </div>
        </div>
    );
};


export default FilteredEvents;


