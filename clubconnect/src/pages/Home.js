// exporting the header component into this file
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";



export default function Home() {
    return (
        <>
            <Header />  
            <SearchBar />
            <h2>Welcome to ClubConnect</h2>
            <p>Explore our platform:</p>
         
       
        </>

    )
}