import React, { useState, useEffect } from 'react';
import IconExample from "./icons/icon";
import RentSpotSection from './buttons/registerbutton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const FindingNest = () => {
    const [view, setView] = useState("findSpot");
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);  // Added loading state
    const [error, setError] = useState(null); // Added error state
    const navigate = useNavigate();

    // Move the localStorage set to the button handler instead of every search change
    const searchButtonHandler = () => {
        localStorage.setItem("search", JSON.stringify(search));  // Save search to localStorage here
        navigate("/parkList");  // Redirect to ParkList
    }

    const styles = {
        container: {
            margin: '20px',
            width: '50%',
            height: '300px',
            textAlign: 'center',
            backgroundColor: 'white'
        },
        searchInput: {
            width: '80%',
            padding: '10px',
            fontSize: '16px',
            marginTop: '20px',
            position: 'relative'
        },
        searchSuggestion: {
            position: 'absolute',
            top: "242px", 
            left: "7.5%",
            border: "1px solid",
            width: '39%',
            zIndex: 1,
            backgroundColor: 'white', 
            maxHeight: '150px',
            overflowY: 'auto' 
        },
        searchButton: {
            padding: '10px 20px',
            backgroundColor: '#FFD700',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
        }
    };

    const searchHandler = async (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSearch(value);
        setError(null); // Reset error on new search
        setSearchData([]); // Reset searchData

        if (value) {
            setLoading(true); // Start loading

            try {
                const response = await axios.get(`http://localhost:3000/userDetails?search=${value}`);
                const addresses = response.data.filter(user => user.address && user.address.toLowerCase().includes(value.toLowerCase()));                
                setSearchData(addresses);  // Set fetched addresses
            } catch (err) {
                console.error("Error fetching data", err);
                setError("Failed to fetch data. Please try again later."); // Show error to the user
            } finally {
                setLoading(false); // End loading
            }
        }
    };

    const suggestionHandler = (address) => {
        setSearch(address);  // Set selected address from the suggestions
        setSearchData([]);  // Clear suggestions after selection
    }

    const allLocationHandler=()=>{
        
    }

    return (
        <div style={styles.container}>
            {/* Icons for navigation */}
            <IconExample setView={setView} />

            <hr />

            {/* Conditional rendering based on selected view */}
            {view === "findSpot" ? (
                <div>
                    <h1>Search parking spot in seconds</h1>
                    <input 
                        type="text" 
                        placeholder="Enter location" 
                        style={styles.searchInput} 
                        value={search} 
                        onChange={searchHandler} 
                    />

                    {/* Display suggestions or messages */}
                    {loading ? (  // Show loading message while fetching data
                        <p>Loading...</p>
                    ) : error ? (  // Show error if there's an issue
                        <p style={{ color: 'red' }}>{error}</p>
                    ) : (
                        searchData.length > 0 && (  // Show suggestions if there are any
                            <div style={styles.searchSuggestion}>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {searchData.map((user, index) => (
                                        <li key={index} onClick={() => suggestionHandler(user.address)}>
                                            {user.address}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}

                    <br />
                    <button style={styles.searchButton} onClick={searchButtonHandler}>Search now</button>
                    <button style={styles.searchButton} onClick={allLocationHandler}>show all</button>

                </div>
            ) : (
                <div>
                   <RentSpotSection />
                </div>
            )}
        </div>
    );
}
