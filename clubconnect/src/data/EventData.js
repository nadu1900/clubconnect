import '../styles/EventData.css';
import { Link } from 'react-router-dom'; 


const EventData = [
  {
    id: 1,
    title: "Event 1",
    date: "2024-02-13",
    time: "10:00 AM",
    location: "Location 1",
    description: "Description of Event 1",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Event 2",
    date: "2024-02-14",
    time: "11:00 AM",
    location: "Location 2",
    description: "Description of Event 2",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Event 3",
    date: "2024-02-15",
    time: "12:00 PM",
    location: "Location 3",
    description: "Description of Event 3",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  // Three additional events added below:
  {
    id: 4,
    title: "Event 4",
    date: "2024-02-16",
    time: "1:00 PM",
    location: "Location 4",
    description: "Description of Event 4",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 5,
    title: "Event 5",
    date: "2024-02-17",
    time: "2:00 PM",
    location: "Location 5",
    description: "Description of Event 5",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 6,
    title: "Event 6",
    date: "2024-02-18",
    time: "3:00 PM",
    location: "Location 6",
    description: "Description of Event 6",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

// functional component
const EventPageButton = () => (
  <Link to="/events">
    <button className="events-button">All Events</button>
  </Link>
);

export { EventData, EventPageButton };