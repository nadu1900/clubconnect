import React, { useState, useEffect } from 'react';
import FilteredEvents from '../data/FilteredEvents';
import SearchBar from './SearchBar';
import eventData from '../data/Event.json';
import eventTData from '../data/EventT.json';
import eventLaf from '../data/LafMockData.json';
import eventMor from '../data/MoravianMockData.json';

const EventManager = ({ initialSchool = '' }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schoolFilter, setSchoolFilter] = useState(initialSchool);
    const [timeFilter, setTimeFilter] = useState('');
    const combinedEvents = [...eventTData.items, ...eventData.items, ...eventLaf.items, ...eventMor.items];
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        console.log(`Filtering for school: ${schoolFilter}`);

        let filtered = combinedEvents.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (schoolFilter) {
            const domain = {
                'lehigh': '@lehigh.edu',
                'techuniv': '@techuniv.edu',
                'lafayette': '@lafayette.edu',
                'morv': '@morv.edu'
            }[schoolFilter];

            console.log(`Filtering by domain: ${domain}`);
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
                allowSchoolFilterChange={!initialSchool}
            />
        </div>
    );
}

export default EventManager;
