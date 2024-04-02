import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import eventData from '../data/Event.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
   
    setFilteredEvents(eventData.items);
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

      if (searchTerm.trim() === '') {
      
          setSearchSuggestions([]);
    
          setFilteredEvents(eventData.items);
          return;
        }
    

 
    const filtered = eventData.items.filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);

  
    generateSearchSuggestions(searchTerm);
  };

  const generateSearchSuggestions = (searchTerm) => {

    const suggestions = eventData.items
      .filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(event => event.name);
    setSearchSuggestions(suggestions);
  };




  const handleKeyPress = (e) => {
    // Handle pressing Enter key in the search input
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };



  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search events by name..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyPress ={handleKeyPress}
      />


      <div>

        <ul>
          {searchSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;