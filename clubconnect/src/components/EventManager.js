import React, { useState, useEffect } from 'react';
import FilteredEvents from '../data/FilteredEvents';
import SearchBar from './SearchBar';
import eventData from '../data/Event.json';
import eventTData from '../data/EventT.json';
import eventLaf from '../data/LafMockData.json';
import eventMor from '../data/MoravianMockData.json';


const EventManager = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schoolFilter, setSchoolFilter] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const combinedEvents = [...eventTData.items, ...eventData.items, ...eventLaf.items, ...eventMor.items];
    const [filteredEvents, setFilteredEvents] = useState(combinedEvents);


    useEffect(() => {
        let filtered = combinedEvents.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );


        if (schoolFilter) {
            const domain = schoolFilter === 'lehigh' ? '@lehigh.edu' :
                           schoolFilter === 'techuniv' ? '@techuniv.edu' : 
                           schoolFilter == 'lafayette' ? '@lafayette.edu' : 
                           schoolFilter == 'morv' ? '@morv.edu' : ''; 
            filtered = filtered.filter(event =>
                event.submittedById && event.submittedById.campusEmail.endsWith(domain)
            );
        }


        if (timeFilter) {
            filtered = filtered.filter(event => new Date(event.startsOn) >= new Date(timeFilter));
        }


        setFilteredEvents(filtered);
    }, [searchTerm, schoolFilter, timeFilter]);


    return (
        <div>
            <SearchBar
                setSearchTerm={setSearchTerm}
                events={combinedEvents}
            />
            <FilteredEvents
                filteredEvents={filteredEvents}
                setSchoolFilter={setSchoolFilter}
                setTimeFilter={setTimeFilter}
            />
        </div>
    );
}


export default EventManager;
