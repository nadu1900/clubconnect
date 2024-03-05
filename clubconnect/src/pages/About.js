// importing necessary components
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import "../styles/About.css";

export default function About() {
    return (
        <>
            <NavBar />
            <div id="about-container" className="about-box">
                <h1>About Club Connect</h1>
                <p>Welcome to Club Connect, the premier platform for connecting the vibrant community of clubs in the scenic Lehigh Valley! At Club Connect, we're dedicated to fostering meaningful connections and collaborations among the esteemed institutions of Moravian College, Lehigh University, Lafayette College, and Muhlenberg College.</p>
                <p>Our Mission: Club Connect was founded with a singular mission in mind: to bridge the gap between the diverse clubs and organizations that enrich the academic and social fabric of the Lehigh Valley.</p>
                <p>Why Club Connect? Unity in Diversity, Community Empowerment, Seamless Experience.</p>
            </div>
        </>
    )
}
