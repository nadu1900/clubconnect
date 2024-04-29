
import React, { useState } from 'react';
import './SearchBar.css';


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
                placeholder="Search Events, Organizations and Schools"
                value={searchTermLocal}
                onChange={handleSearchChange}
             
            />
   
        </div>
    );
};
export default SearchBar;