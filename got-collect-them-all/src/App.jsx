import React, {Component} from "react";
// import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';

function App() {
  return(
    <div className="App">
      <div className="search-bar-container"></div>
        <SearchBar />
        <div>SearchResults</div>
    </div>  
    )
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;



