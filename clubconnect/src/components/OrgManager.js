import React, { useState, useEffect } from 'react';
import FilteredOrgs from './FilteredOrgs'; 
import SearchOrgs from './SearchOrgs';
import orgData from '../data/LehighOrgs.json'; 
import orgLaf from '../data/LafOrgs.json';
import orgMor from '../data/MoravianOrgs.json';

const OrgManager = ({ initialSchool = '' }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [schoolFilter, setSchoolFilter] = useState(initialSchool);
    const [timeFilter, setTimeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const combinedOrgs = [...orgData.items, ...orgLaf.items, ...orgMor.items];
    const [filteredOrgs, setFilteredOrgs] = useState([]);

    useEffect(() => {
        console.log(`Filtering for school: ${schoolFilter}`);

        let filtered = combinedOrgs.filter(org =>
            org.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (schoolFilter) {
            const domain = {
                'lehigh': '@lehigh.edu',
                'techuniv': '@techuniv.edu',
                'lafayette': '@lafayette.edu',
                'morv': '@morv.edu'
            }[schoolFilter];

            console.log(`Filtering by domain: ${domain}`);
            filtered = filtered.filter(org =>
                org.contactInfo && org.contactInfo.email.endsWith(domain)
            );
        }

        if (categoryFilter) {
            filtered = filtered.filter(org => org.categories && org.categories.includes(categoryFilter));
        }

        if (timeFilter) {
            filtered = filtered.filter(org => new Date(org.founded) >= new Date(timeFilter));
        }

        setFilteredOrgs(filtered);
    }, [searchTerm, schoolFilter, timeFilter, categoryFilter]);

    return (
        <div>
            <SearchOrgs
                setSearchTerm={setSearchTerm}
                orgs={combinedOrgs}
            />
            <FilteredOrgs
                filteredOrgs={filteredOrgs}
                setSchoolFilter={setSchoolFilter}
                setTimeFilter={setTimeFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                allowSchoolFilterChange={!initialSchool}
            />
        </div>
    );
}

export default OrgManager;
