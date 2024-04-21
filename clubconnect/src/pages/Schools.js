import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { SchoolData } from '../data/SchoolData';
import { Link } from 'react-router-dom';
import banner from '../data/schoolimages/banner.jpeg';



export default function Schools() {
  return (
    <>    
      <h1>ClubConnect</h1>
      <NavBar />
      <SearchBar />
      <div className="school-container">
      <div className="carousel">
      <img src={banner} alt="Banner" className="banner" />
        {SchoolData.map((school, index) => (
           <Link key={index} to={`/schools/${school.slug}`} className="school-card">
            <div>
              <img src={school.image} alt={school.name} />
              <h3>{school.name}</h3>
              <p>{school.location}</p>
              <p>{school.description}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}
