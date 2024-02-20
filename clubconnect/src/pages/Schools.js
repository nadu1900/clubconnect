// exporting the header component into this file
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { SchoolData} from '../data/SchoolData'; 
import { Link } from 'react-router-dom'; 



export default function Schools(){
    
    return(
        <>
        <h1> ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <div className="school-container">
         {SchoolData.map((school, index) => (
          <Link key={index} to={`/school/${school.name.toLowerCase()}`} className="school-card">
            <div>
              <img src={school.image} alt={school.name} />
              <h3>{school.name}</h3>
              <p>{school.location}</p>
              <p>{school.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

