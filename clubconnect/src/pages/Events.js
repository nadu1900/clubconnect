import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from 'react';
import FilteredEvents from "../data/FilteredEvents";

export default function Events(){
    return(
        <>
        <h1>ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <FilteredEvents />
        </>
    )
}