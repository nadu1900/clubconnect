import React, { useState, useEffect } from 'react';
import { EventData } from "./EventData";
import '../styles/FilteredEvents.css';
import eventData from '../data/Event.json';
import eventTData from '../data/EventT.json';

const FilteredEvents = () => {
  const [searchResults, setSearchResults] = useState(eventData.items);
  const [schoolFilter, setSchoolFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  useEffect(() => {
   const combinedEvents = [...eventTData.items, ...eventData.items];
   
       let filteredEvents = combinedEvents;

   if (schoolFilter) {
        const domain = schoolFilter === 'lehigh' ? '@lehigh.edu' : 
                       schoolFilter === 'techuniv' ? '@techuniv.edu' : '';
        if (domain) {
          filteredEvents = filteredEvents.filter(event =>
            event.submittedById && event.submittedById.campusEmail.endsWith(domain)
          );
        }
      }

    if (timeFilter) {
      filteredEvents = filteredEvents.filter(event => new Date(event.startsOn) >= new Date(timeFilter));
    }

    setSearchResults(filteredEvents);
  }, [schoolFilter, timeFilter]);

  return (
    <>
      <button onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
        {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
      </button>

      <div className={`advanced-filters ${showAdvancedFilters ? 'active' : ''}`}>
        <div className="advanced-filters-container">
          <label htmlFor="school">School:</label>
          <select id="school" onChange={e => setSchoolFilter(e.target.value)}>
            <option value="">All</option>
            <option value="lehigh">Lehigh</option>
             <option value="techuniv">Tech University</option>
            {/* Add options for other schools if necessary */}
          </select>

          <label htmlFor="time">Time Posted:</label>
          <input type="date" id="time" onChange={e => setTimeFilter(e.target.value)} />
        </div>
      </div>

      <div className="filtered-events">
        <h2>Filtered Events</h2>
        <ul>
          {Array.isArray(searchResults) && searchResults.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilteredEvents;