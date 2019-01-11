import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlacesContainer from './components/PlacesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PlacesContainer/>
      </div>
    );
  }
}

export default App;
