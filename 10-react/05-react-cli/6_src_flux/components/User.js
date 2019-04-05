import React, { Component } from 'react';
import './User.css';

class User extends Component {
    state= {
        name: null
    }

    constructor(props){
        super(props);
    }
    // ngInit(){}
    componentDidMount(){
        // /user/:user_name
        const name = this.props.match.params.user_name;
        console.log(name);
        this.setState({
          name: name
        })
        // send get request to server
    }

    render() {
        return (
          <div className="User">
            <h4 className="text-center">User Page</h4>
            <p>User Name is : {this.state.name}</p>
          </div>
        );

      }
}

export default User;