import React from "react";

import "./SearchResultsList.css"

export const SearchResultsList= ({results}) => {
    return(<div className="results-list">
            {results.map((results, cards) => {
                    return <searchResult result={result} key={id}/>;
                })
            }
        </div>
    )
}