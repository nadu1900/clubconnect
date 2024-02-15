// exporting the header component into this file
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";


export default function About(){
    return(
        <>
        <Header />
        <NavBar />
        <SearchBar />
        <h2> About Page</h2>
        </>
    )
}