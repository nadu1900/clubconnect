import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from 'react';
import FilteredEvents from "../data/FilteredEvents";
import AllEvents from "../data/AllEvents";
import EventManager from "../components/EventManager";
import OrgManager from "../components/OrgManager";


export default function Orgs(){
    return(
        <>
        <h1>ClubConnect</h1>
        <NavBar />
        <OrgManager/>
   
        </>
    )
}