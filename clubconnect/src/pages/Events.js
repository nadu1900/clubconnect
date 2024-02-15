// exporting the header component into this file
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";


export default function Events(){
    return(
        <>
        <h1>ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <h2> Events Page</h2>
        </>
    )
}