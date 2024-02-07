// exporting the header component into this file
import Header from "../components/Header";
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
        {/* Adding the links for our nav bar */}
            <Header />
            <h2>Welcome to Club Connect!</h2>
            <p>Explore our platform:</p>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/events">View Events</Link></li>
                <li><Link to="/schools">View Schools</Link></li>
            </ul>
        </>

    )
}