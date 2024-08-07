import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import cards from "../../utils/pokemon-api"

export const SearchBar = () => {
    const [input, setInput] = useState("")

    // const fetchData = (cards) => {
    //     fetch("https://api.pokemontcg.io/v2/cards")
    //     .then((response => response.json))
    //     .then(json => {
    //         const results = ((cards) => {
    //             return (
    //                 id && 
    //                 Name && 
    //                 supertype && 
    //                 subtypes
    //             );
    //         });
    //         console.log(results);
    //     }); 
    // };

    async function fetchData(value) {
        const results = await cards(value)
        console.log(results)
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
            // onSubmit={(e) => fetchData(e.target.value)}
            />
        </div>
    )
}