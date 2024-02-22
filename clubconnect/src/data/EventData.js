import '../styles/EventData.css';
import { Link } from 'react-router-dom'; 


const EventData = [
  {
    id: 1,
    title: "Coding Sesh with NSBE",
    date: "2024-02-13",
    time: "10:00 AM",
    location: "Location 1",
    description: "Description of Event 1",
    image: require("./eventimages/Brown Modern Computer Programming Course Instagram Post-2.png"), 
  },
  {
    id: 2,
    title: "Headshot Events",
    date: "2024-02-14",
    time: "11:00 AM",
    location: "Location 2",
    description: "Description of Event 2",
    image: require("./eventimages/Green and Purple Modern Speakers Instagram Post.png"),
  },
  {
    id: 3,
    title: "Baskebtall Tournament",
    date: "2024-02-15",
    time: "12:00 PM",
    location: "Location 3",
    description: "Description of Event 3",
    image: require("./eventimages/basketball tournament.png"), 
  },
  {
    id: 4,
    title: "Thanksgiving Post",
    date: "2024-02-16",
    time: "1:00 PM",
    location: "Location 4",
    description: "Description of Event 4",
    image: require("./eventimages/Orange And Cream Minimalist Happy Thanksgiving Day Instagram Post.png"), 
  },
  {
    id: 5,
    title: "Event 5",
    date: "2024-02-17",
    time: "2:00 PM",
    location: "Location 5",
    description: "Description of Event 5",
    image: require("./eventimages/MCAT Post.png"), 
  },
  {
    id: 6,
    title: "Event 6",
    date: "2024-02-18",
    time: "3:00 PM",
    location: "Location 6",
    description: "Description of Event 6",
        image: require("./eventimages/black-is-king-image-4d4dd8ce-1596123053.jpeg"), 
  },
];

// functional component
const EventPageButton = () => (
  <Link to="/events">
    <button className="events-button">All Events</button>
  </Link>
);



export { EventData, EventPageButton };