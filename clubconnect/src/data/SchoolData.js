import '../styles/SchoolData.css';
import { Link } from 'react-router-dom'; 


const SchoolData = [
    {
      id: 1,
      name: "Lehigh University",
      location: "Bethlehem, PA",
      description: "Private research university in Bethlehem, Pennsylvania.",
      image: "https://via.placeholder.com/150", 
    },
    {
      id: 2,
      name: "Lafayette College",
      location: "Easton, PA",
      description: "Private liberal arts college in Easton, Pennsylvania.",
      image: "https://via.placeholder.com/150", 
    },
    {
      id: 3,
      name: "Moravian University",
      location: "Bethlehem, PA",
      description: "Private liberal arts college in Bethlehem, Pennsylvania.",
      image: "https://via.placeholder.com/150", 
    },
    {
      id: 4,
      name: "Muhlenberg College",
      location: "Allentown, PA",
      description: "Private liberal arts college in Allentown, Pennsylvania.",
      image: "https://via.placeholder.com/150",
    },
  
  ];
  
  const SchoolPageButton = () => (
    <Link to="/schools ">
      <button className="school-button">All Schools</button>
    </Link>
  );
  
  export { SchoolData, SchoolPageButton };  
  