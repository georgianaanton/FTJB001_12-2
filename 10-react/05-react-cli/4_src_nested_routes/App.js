import React, { Component } from 'react';
import './../node_modules/bootstrap-css-only/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/contact/ContactUs';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App container">
          <Header/>
          <h1 className="text-center text-primary">React SPA Demo</h1>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            
            <Route path="/contact" component={ContactUs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
