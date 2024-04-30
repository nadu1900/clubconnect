import React, { useState, useEffect } from 'react';
import { SchoolData } from '../data/SchoolData';
import '../styles/Home.css';
import '../styles/SchoolData.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import EventContainer from './EventContainer';
import banner from '../data/schoolimages/banner.jpeg';
import banner2 from '../data/schoolimages/banner2.png';
import banner3 from '../data/schoolimages/banner3.jpeg';
import banner4 from '../data/schoolimages/banner4.jpeg';
import banner5 from '../data/schoolimages/banner5.jpeg';
import banner6 from '../data/schoolimages/banner6.jpeg';
import banner7 from '../data/schoolimages/banner7.jpeg';
import { Link } from 'react-router-dom';
import OrganizationContainer from './OrgsContainer';
import WhyClubConnect from '../components/WhyCC';

const banners = [banner, banner2, banner3, banner4, banner5, banner6, banner7];
export default function Home() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change the duration to switch banners (in milliseconds)
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>ClubConnect</h1>
      <NavBar />
      <p className="home-paragraph">Discover unique opportunities in the Lehigh Valley</p>
      <div className="banner-container">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={index === currentBannerIndex ? 'banner active' : 'banner'}
          />
        ))}
      </div>
      
      <SearchBar />
      <WhyClubConnect/>
      <h2 className='fea'> Our Featured Events </h2>
      <EventContainer />
      <h2 className='fea'>Our Featured Clubs</h2>
      <OrganizationContainer />
      <h2 className='fea'>Our Network</h2>
      <div className="school-container">
        {SchoolData.map((school, index) => (
          <Link key={school.id} to={`/schools/${school.slug}`} className="school-card">
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
