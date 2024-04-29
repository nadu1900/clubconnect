import React, { useState } from 'react';
import './SearchBar.css';
import { useHistory, useNavigate } from 'react-router-dom';
import eventData from '../data/Event.json';
import eventTData from '../data/EventT.json';
import eventLaf from '../data/LafMockData.json';
import eventMor from '../data/MoravianMockData.json';
import orgLaf from '../data/LafOrgs.json'; 
import orgMor from '../data/MoravianOrgs.json'; 
import orgLeh from '../data/LehighOrgs.json';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 0) {
            const eventSuggestions = [
                ...eventData.items,
                ...eventTData.items,
                ...eventLaf.items,
                ...eventMor.items,
            ]
            .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            .map(item => ({ ...item, type: 'event' })); 

             const orgSuggestions = [
                ...orgLaf.items, 
                ...orgLeh.items, 
                ...orgMor.items,
             ]
                        .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
                        .map(item => ({ ...item, type: 'organization' }));  // Mark as organization
            
            
        setSuggestions([...eventSuggestions, ...orgSuggestions]);
        setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.name); // Update the input field and the local state
        setShowSuggestions(false);

        navigate(`/${suggestion.type}/${suggestion.id}`);

    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for Organizations or Events..."
                onChange={handleSearchChange}
                value={searchTerm}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onFocus={() => {
                    if (searchTerm) {
                        setShowSuggestions(true);
                    }
                }}
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            <strong>{suggestion.name}</strong> - {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
