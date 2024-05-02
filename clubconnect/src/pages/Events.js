import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import EventManager from "../components/EventManager";
import "../styles/Events.css";

export default function Events() {
    // Sample image URLs for featured events
    const featuredEvents = [
        {
            title: "Annual Academic Symposium",
            date: "April 30, 2024",
            location: "Lehigh University",
            imageUrl: "https://www.ticketleap.com/wp-content/uploads/2024/01/62a8e9a50f19b73012512a91_college-students-hanging-out-on-campus.jpg",
        },
        {
            title: "Leadership Conference",
            date: "May 5, 2024",
            location: "Lafayette College",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/515eba28e4b0ecbdd5ac1a2a/1631042243660-05GO2NBUR8KHBSZHPKJP/cool_event_ideas_for_college_students.jpg",
        },
        {
            title: "Alumni Gala Dinner",
            date: "May 10, 2024",
            location: "Lehigh University",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/515eba28e4b0ecbdd5ac1a2a/7661446d-cc74-42db-8111-e6f7708ad060/winter_activities_for_college_students.jpg",
        },
        {
            title: "Career Fair & Networking Expo",
            date: "May 15, 2024",
            location: "Moravian College",
            imageUrl: "https://concept3d.com/wp-content/uploads/2023/11/Students-performing-at-an-open-mic-night-one-of-the-most-popular-college-campus-event-ideas.jpg",
        },
        {
            title: "Spring Festival & Music Concert",
            date: "April 28, 2024",
            location: "Moravian College",
            imageUrl: "https://www.vancopayments.com/hubfs/Cheerful%20group%20of%20kids%20at%20school%20room%20having%20education%20activity.jpeg",
        },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + featuredEvents.length) % featuredEvents.length);
    };

    return (
        <div className="events-container">
            <h1>ClubConnect</h1>
            <NavBar />
            <h2 className="featured-events-heading">Featured Events</h2>
            <div className="featured-events-list">
                {featuredEvents.map((event, index) => (
                    <div key={index} className="featured-event">
                        <img src={event.imageUrl} alt={event.title} />
                        <div className="event-details">
                            <h3>{event.title}</h3>
                            <p>Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            <EventManager />
        </div>
    );
}
