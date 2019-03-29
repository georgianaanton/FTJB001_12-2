import React, { Component } from 'react';
import './App.css';
import './../node_modules/bootstrap-css-only/css/bootstrap.css';
import Dropdown from './Dropdown';

class App extends Component {

  state = {
    "countries": ["India", "Japan", "USA"],
    "title": "Select Your Country"
  }

  render() {

    return (
      <div className="App container">
        <h1>React Dropdown Demo</h1>
        <Dropdown title={this.state.title} countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
