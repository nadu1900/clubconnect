import React, { useState } from 'react';
const SearchEvents = ({ setSearchTerm, events }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        console.log("Input Changed: ", value);
        setSearchTerm(value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for Events..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchEvents;
