import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
<<<<<<< HEAD
import DataFetch from "../data/DataFetch";


export default function Schools(){
    return(
        <>
        <h1> ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <DataFetch />
        </>
    )
=======
import { SchoolData } from '../data/SchoolData';
import { Link } from 'react-router-dom';

export default function Schools() {
  return (
    <>
      <h1>ClubConnect</h1>
      <NavBar />
      <SearchBar />
      <div className="school-container">
        {SchoolData.map((school, index) => (
          <a key={index} href={school.website} target="_blank" rel="noopener noreferrer" className="school-card">
            <div>
              <img src={school.image} alt={school.name} />
              <h3>{school.name}</h3>
              <p>{school.location}</p>
              <p>{school.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
>>>>>>> 523d382eaa4e591f1735a1d723d51fe3a57ca732
}
