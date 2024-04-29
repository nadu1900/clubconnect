import React, { useState } from 'react';

const SearchOrgs = ({ setSearchTerm, orgs }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        console.log("Organization Input Changed: ", value); // Adjusted log message for clarity
        setSearchTerm(value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for organizations..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchOrgs;
