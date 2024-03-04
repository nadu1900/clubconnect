// exporting the header component into this file
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import DataFetch from "../data/DataFetch";


export default function Schools(){
    return(
        <>
        <h1> ClubConnect</h1>
        <NavBar />
        <SearchBar />
        <DataFetch />
        </>
    )
}

