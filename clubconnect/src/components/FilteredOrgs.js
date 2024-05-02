import React from 'react';
import { Link } from 'react-router-dom';
import "./FilteredOrgs.css"; // Assuming you have similar styling as FilteredEvents

const FilteredOrgs = ({ filteredOrgs, setSchoolFilter, setTimeFilter, setCategoryFilter, allowSchoolFilterChange }) => {
    return (
        <div>
            {/* Filter options UI */}
            <div className="filter-options-container">
                {allowSchoolFilterChange && (
                    <div className="filter-category">
                        School Filter:
                        <select onChange={e => setSchoolFilter(e.target.value)}>
                            <option value="">All Schools</option>
                            <option value="lehigh">Lehigh</option>
                            <option value="techuniv">Tech University</option>
                            <option value="lafayette">Lafayette University</option>
                            <option value="morv">Moravian</option>
                        </select>
                    </div>
                )}

                <div className="filter-category">
                    Founded After:
                    <input type="date" onChange={e => setTimeFilter(e.target.value)} />
                </div>

                <div className="filter-category">
                    Category Filter:
                    <select onChange={e => setCategoryFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Community">Community</option>
                        <option value="Academic">Academic</option>
                        <option value="Arts">Arts</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>
            </div>

            {/* Organizations display area */}
            <div className="org-container">
                {filteredOrgs.map(org => (
                    <Link to={`/organization/${org.organizationId}`} key={org.organizationId} className="org-card">
                        <div className="org-info">
                            <h2 className="org-name">{org.name}</h2>
                            <p className="org-desc">{org.description}</p>
                            {org.imageUrl && (
                                <img src={org.imageUrl} className="org-image" alt={org.name} />
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FilteredOrgs;
