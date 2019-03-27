import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  render() {
    const date = new Date();
    return (
      <div className="App">
        {/* <h1>This is basic react app</h1>
        <p>Today: {date.getFullYear()}</p>
        <hr/> */}
        <Person email="test@gamil.com" />
        <hr id="firstHr"/>
      </div>
    );
  }
}

export default App;
