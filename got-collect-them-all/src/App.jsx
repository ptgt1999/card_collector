import React, {Component} from "react";
import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from "./components/SearchResultsList";
import { SearchResult } from "./components/SearchResult";

function App() {

  const [results, setResults] = useState([])

  return(
    <div className="App">
      <div className="search-bar-container"></div>
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
    </div>  
    )
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }))
//       .catch(err => err);
//   }

//   componentDidMount() {
//     this.callAPI();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome</h1>
//         </header>
//         <p className="App-intro">{this.state.apiResponse}</p>
//       </div>
//     );
//   }
// }

export default App;



