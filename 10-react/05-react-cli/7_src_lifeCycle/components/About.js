import React, { Component } from 'react';
import './About.css';

class About extends Component {

  gotoHome = ()=>{
    console.log(this.props)
    this.props.history.push('/');
  }

    render() {
        return (
          <div className="about">
            <h4 className="text-center">About Page</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at perspiciatis quia aspernatur cum alias deleniti, ipsa et repellendus assumenda, dicta illum itaque molestiae explicabo quod odio doloremque voluptatum! Suscipit.</p>

            <div className="row">
              <div className="col-sm-2 offset-sm-10">
                <button onClick={this.gotoHome} className="btn btn-secondary btn-block">Home</button>
              </div>
            </div>
          </div>
        );

      }
}

export default About;