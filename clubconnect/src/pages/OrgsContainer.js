import React, { useState } from 'react';
import orgData from '../data/LehighOrgs.json'; 
import orgLaf from '../data/LafOrgs.json';
import orgMor from '../data/MoravianOrgs.json';
import { Link } from 'react-router-dom';
import './OrgsContainer.css';

const OrganizationContainer = () => {
  const organizations = [...orgData.items, ...orgLaf.items, ...orgMor.items];
  const [currentIndex, setCurrentIndex] = useState(0);
  const orgsPerPage = 4;

  const nextOrgs = () => {
    const maxIndex = Math.ceil(organizations.length / orgsPerPage) - 1;
    setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  const prevOrgs = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const currentOrgs = organizations.slice(
    currentIndex * orgsPerPage,
    (currentIndex + 1) * orgsPerPage
  );

  return (
    <div>
   <button className="pagination-arrow left" onClick={prevOrgs} disabled={currentIndex === 0}>
                &#8592;
                  </button> 
      <div className="org-container">
        {currentOrgs.map(org => (
          <Link to={`/organization/${org.organizationId}`} key={org.organizationId} className="org-card">
            <div className="org-info">
              <h2 className="org-name">{org.name}</h2>
              <p className="org-desc">{org.description}</p>
            </div>
            {org.imageUrl && (
              <img src={org.imageUrl} className="org-image" alt={org.name} />
            )}
          </Link>
        ))}

      </div>
       <button className="pagination-arrow right" onClick={nextOrgs} disabled={(currentIndex + 1) * orgsPerPage >= organizations.length}>
              &#8594;
            </button>
      <div className="pagination-controls">
 
      </div>
    </div>
  );
};

export default OrganizationContainer;
