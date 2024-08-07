import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import cards from "../../utils/pokemon-api"

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")
    async function fetchData(value) {
        const results = await cards(value)
        console.log(results)
        // setResults(results)
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
            />
        </div>
    )
}

