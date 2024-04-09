import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import eventData from '../data/Event.json';

<<<<<<< HEAD
const SearchBar = ({ setSearchTerm, events }) => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTermLocal(value);
        setSearchTerm(value);


        if (value.length > 0) {
            const searchSuggestions = events
                .filter(event => event.name.toLowerCase().includes(value.toLowerCase()))
                .map(event => event.name);
            setSuggestions(searchSuggestions);
        } else {
            setSuggestions([]);
        }
    };

 const handleBlur = () => {
        // Hide suggestions after a short delay to allow click event to process
        setTimeout(() => setShowSuggestions(false), 10);
    };

    const handleFocus = () => {
        if (searchTermLocal.length > 1) {
            setShowSuggestions(true);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search events by name..."
                value={searchTermLocal}
                onChange={handleSearchChange}
             
            />
   
        </div>
    );
};


export default SearchBar;
=======
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
>>>>>>> f6eba35da664c44f506286de36e4c11c5a194c3a
