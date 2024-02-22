import React, { useState } from 'react';
import { EventData } from "./EventData";
import '../styles/FilteredEvents.css';

const FilteredEvents = () => {
  const [searchResults, setSearchResults] = useState(EventData);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false); // Step 1

  return (
    <>
      {/* Button to toggle advanced filters */}
      <button onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
        {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
      </button>

      {/* Conditionally render advanced filters based on visibility state */}
      <div className={`advanced-filters ${showAdvancedFilters ? 'active' : ''}`}>
        <div className="advanced-filters-container">
          {/* filters */}
          <label htmlFor="category">Category:</label>
          <select id="category" onChange={e => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="dance">Dance</option>
            <option value="cultural">Cultural</option>
            <option value="academic">Academic</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="school">School:</label>
          <select id="school" onChange={e => setSchoolFilter(e.target.value)}>
            <option value="">All</option>
            <option value="lehigh">Lehigh</option>
            <option value="moravian">Moravian</option>
            <option value="muhlenberg">Muhlenberg</option>
            <option value="lafayette">Lafayette</option>
          </select>

          {/* Time filter input */}
          <label htmlFor="time">Time Posted:</label>
          <input type="date" id="time" onChange={e => setTimeFilter(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default FilteredEvents;
