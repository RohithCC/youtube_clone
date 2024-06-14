import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

// Creating the context
export const Context = createContext();

// AppContext component
export const AppContext = (props) => {
    // State variables
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("US");
    const [mobileMenu, setMobileMenu] = useState(false);

    // Fetch data whenever selectedCategory changes
    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    // Function to fetch data based on the selected category
    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`https://youtube-v3-alternative.p.rapidapi.com/trending?geo=${query}&lang=en`).then(({ contents }) => {       
            setSearchResults(contents);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    };

    // Providing context values
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
