import React from 'react';
import "../styles/FilteredEvents.css";


const FilteredEvents = ({ filteredEvents = [], setSchoolFilter, setTimeFilter }) => {
    return (
        <div>
            <select onChange={e => setSchoolFilter(e.target.value)}>
                <option value="">All Schools</option>
                <option value="lehigh">Lehigh</option>
                <option value="techuniv">Tech University</option>
            </select>
            <input type="date" onChange={e => setTimeFilter(e.target.value)} />
  <div className="event-container">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <div className="event-info">
                            <h2 className="event-name">{event.name}</h2>
                            <p className="event-desc">{event.description}</p>
                        </div>
                        {event.imageUrl && (
                            <img src={event.imageUrl} className="event-image" alt={event.name} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FilteredEvents;

