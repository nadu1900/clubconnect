import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import eventData from '../data/Event.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set the events data from the local JSON file
    setEvents(eventData.items);
  }, []);

  // Filter events based on search term
  const filteredEvents = events.filter(event =>
   event.title && event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change in the search bar
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Handle search action if needed
    // For example, you can perform some action when the search button is clicked
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by school, club, or event name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>

      <button className="search-button" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
      <div className="search-line"></div>
    </div>
  );
};

export default SearchBar;
