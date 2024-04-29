import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/FilteredEvents.css";

const FilteredEvents = ({ filteredEvents = [], setSchoolFilter, setTimeFilter, setCategoryFilter }) => {
    // Render the filter options and the filtered list of events
    return (
        <div>
            {/* Filter options UI */}
            <div className="filter-options-container">
                <div className="filter-category">
                    School Filter:
                    <select onChange={e => setSchoolFilter(e.target.value)}>
                        <option value="">All Schools</option>
                        <option value="lehigh">Lehigh</option>
                        <option value="techuniv">Tech University</option>
                        <option value="lafayette">Lafayette University</option>
                        <option value="morv">Moravian</option>
                    </select>
                </div>
                
                <div className="filter-category">
                    Time Filter:
                    <input type="date" onChange={e => setTimeFilter(e.target.value)} />
                </div>

                <div className="filter-category">
                    Category Filter:
                    <select onChange={e => setCategoryFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Community">Community</option>
                        <option value="Academic">Academic</option>
                        <option value="Arts">Arts</option>
                    </select>
                </div>
            </div>

            {/* Events display area */}
            <div className="event-container">
                {filteredEvents.map(event => (
                    <Link to={`/event/${event.id}`} key={event.id} className="event-card">
                        <div className="event-info">
                            <h2 className="event-name">{event.name}</h2>
                            <p className="event-desc">{event.description}</p>
                            {event.imageUrl && (
                                <img src={event.imageUrl} className="event-image" alt={event.name} />
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FilteredEvents;

