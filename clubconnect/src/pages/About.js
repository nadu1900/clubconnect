import React from "react";
import NavBar from "../components/NavBar";
import "../styles/About.css";

export default function About() {
    // Mock data for testimonials
    const testimonials = [
        {
            name: "John Doe",
            position: "President, Tech Club",
            quote: "Club Connect has been instrumental in helping us find new members and collaborate with other clubs on exciting projects."
        },
        {
            name: "Jane Smith",
            position: "Vice President, Arts Society",
            quote: "Thanks to Club Connect, we've been able to expand our reach and organize successful events that bring our community together."
        }
    ];

    // Mock data for statistics
    const statistics = {
        clubsRegistered: 120,
        eventsOrganized: 300,
        membersEngaged: 5000
    };

    return (
        <>
            <NavBar />
            <div id="about-container" className="about-box">
                <h1>About Club Connect</h1>
                <p>Welcome to Club Connect, the premier platform for connecting the vibrant community of clubs in the scenic Lehigh Valley! At Club Connect, we're dedicated to fostering meaningful connections and collaborations among the esteemed institutions of Moravian College, Lehigh University, Lafayette College, and Muhlenberg College.</p>
                <p>Our Mission: Club Connect was founded with a singular mission in mind: to bridge the gap between the diverse clubs and organizations that enrich the academic and social fabric of the Lehigh Valley.</p>
                <p>Why Club Connect? Unity in Diversity, Community Empowerment, Seamless Experience.</p>
                
                {/* Testimonials section */}
                <div className="testimonials-section">
                    <h2>What Our Members Say</h2>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p className="quote">"{testimonial.quote}"</p>
                            <p className="name">{testimonial.name}</p>
                            <p className="position">{testimonial.position}</p>
                        </div>
                    ))}
                </div>

                {/* Statistics section */}
                <div className="statistics-section">
                    <h2>Club Connect By The Numbers</h2>
                    <div className="statistics">
                        <p>Clubs Registered: {statistics.clubsRegistered}</p>
                        <p>Events Organized: {statistics.eventsOrganized}</p>
                        <p>Members Engaged: {statistics.membersEngaged}</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="call-to-action">
                    <h2>Ready to Get Started?</h2>
                    <p>Join Club Connect today and become a part of our thriving community!</p>
                    <button className="join-button">Join Now</button>
                </div>
            </div>
        </>
    );
}
