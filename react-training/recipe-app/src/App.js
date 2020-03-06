import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // const APP_ID = "a1186ade";
    // const APP_KEY = "5102b053395b3228bf351f0c138d07e2";

    //const exempleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;