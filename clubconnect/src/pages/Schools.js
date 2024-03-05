<<<<<<< HEAD
// exporting the header component into this file
import Header from "../components/Header";
import CallBack from "../components/CallBack";


export default function Schools(){
    return(
        <>
        <Header />
        <CallBack />
        <h2> School Page</h2>
        </>
    )
}
=======
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
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
}
>>>>>>> origin/Develop
