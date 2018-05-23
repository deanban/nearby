import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar'
import MapContainer from './components/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar/>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
