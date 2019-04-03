import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { withRouter } from "react-router-dom";


const Header = (props)=>{
    
        return (
          <div className="Header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">ContactUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-success" onClick={()=>{
                                console.log(props);
                                props.history.push('/');
                                }}>Btn Home</button>
                        </li>

                    </ul>
                    

                </div>
            </nav>
          </div>
        );

}

export default withRouter(Header);