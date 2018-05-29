import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar'
import NewMapContainer from './components/NewMapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar/>
      </div>
    );
  }
}

export default App;
