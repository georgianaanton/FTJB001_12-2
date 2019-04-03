import React, { Component } from 'react';
import './../node_modules/bootstrap-css-only/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import User from './components/User';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App container">
          <Header/>
          <h1 className="text-center text-primary">React SPA Demo</h1>
            {/* <Route path="/home" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={About} />
            <Route path="/user/:user_name" component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
