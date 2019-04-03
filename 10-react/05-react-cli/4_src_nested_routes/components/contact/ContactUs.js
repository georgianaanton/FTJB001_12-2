import React, { Component } from 'react';
import './ContactUs.css';

import Child_1 from "./child_1/Child_1";
import Child_2 from "./child_2/Child_2";

import { Route, Link } from "react-router-dom";

const ContactUs = (props)=> {
    return (
        <div className="contact">
          <div className="row">
            <div className="col-sm-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/child_1">Child_1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/child_2">Child_2</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-9">
              <h4 className="text-center">Contact Page</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque consectetur voluptatem quam minima id hic odit officia, ipsa ratione expedita quisquam accusantium, quos ea provident aliquam voluptas? Nemo, neque minima?</p>
              <Route exact path="/contact" component={
                () => (
                  <h3 className="text-danger text-center">Please select a child view:</h3>
                )}
              />
              <Route path={props.match.url+"/child_1"} component={Child_1} />
              <Route path={props.match.url+"/child_2"} component={Child_2} />
            </div>
          </div>
        </div>
    );
}

export default ContactUs;