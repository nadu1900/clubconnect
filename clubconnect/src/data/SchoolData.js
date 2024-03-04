import '../styles/SchoolData.css';
import './schoolimages/download.png'
import { Link } from 'react-router-dom'; 


const SchoolData = [
    {
      id: 1,
      name: "Lehigh University",
      location: "Bethlehem, PA",
      description: "Private research university in Bethlehem, Pennsylvania.",
      image: require("./schoolimages/download.png"), 
      website: "https://lehigh.campuslabs.com/engage/",
    },
    {
      id: 2,
      name: "Lafayette College",
      location: "Easton, PA",
      description: "Private liberal arts college in Easton, Pennsylvania.",
      image: require("./schoolimages/Lafayette-Leopards-logo.png"), 
      website: "https://ourcampus.lafayette.edu/club_signup",
    },
    {
      id: 3,
      name: "Moravian University",
      location: "Bethlehem, PA",
      description: "Private liberal arts college in Bethlehem, Pennsylvania.",
      image: require("./schoolimages/momo.png"), 
      website: "https://www.moravian.edu/student-engagement/clubs-and-organizations",
    },
    {
      id: 4,
      name: "Muhlenberg College",
      location: "Allentown, PA",
      description: "Private liberal arts college in Allentown, Pennsylvania.",
      image: require("./schoolimages/horsy.jpg"),
      website: "https://www.muhlenberg.edu/student-life/studentorganizations/",
    },
  
  ];
  
  const SchoolPageButton = () => (
    <Link to="/schools ">
      <button className="school-button">All Schools</button>
    </Link>
  );
  
  
  export { SchoolData, SchoolPageButton };  
  