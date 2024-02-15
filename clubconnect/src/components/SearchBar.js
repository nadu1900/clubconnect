
import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by school, club, or event name"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};


export default SearchBar;

