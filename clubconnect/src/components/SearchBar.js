<<<<<<< HEAD
import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling
=======

import React, { useState } from 'react';
import './SearchBar.css'; 

>>>>>>> origin/Develop

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

<<<<<<< HEAD
=======

>>>>>>> origin/Develop
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< HEAD
=======

>>>>>>> origin/Develop
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

<<<<<<< HEAD
export default SearchBar;
=======

export default SearchBar;

>>>>>>> origin/Develop
