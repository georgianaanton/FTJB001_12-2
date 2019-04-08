import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

import UserStore from './../stores/UserStore';

import AddUserForm from './AddUserForm'

// import {createUser, deleteUser} from './../actions/UserActions';
import * as UserActions from './../actions/UserActions';

class Home extends Component {
  state = {
      users: UserStore.getAllUsers()
  }

  constructor(props){
    super(props);
    
  }
  componentWillMount(){
    // console.log(this.props);
    UserStore.on('change', this.getUsers)
  }

  componentWillUnmount(){
    UserStore.removeListener('change', this.getUsers)
  }

  getUsers= ()=>{
    this.setState({
      users: UserStore.getAllUsers()
    })
  }

  createUser = (newUser)=>{
    let randomNum = Math.floor(Math.random()*1000);
    let user = {
      name: newUser.name,
      password: 'abc',
      role: randomNum %2 === 0 ? 'user':'admin'
    }

    UserActions.createUser(user);
  }

  // formSumitted =(user)=>{}
    render() {
        return (
          <div className="home">
            <h4 id="head" className="text-center">Home Page</h4>
            <button className="btn btn-success" onClick={this.createUser}>Add User</button>
            <AddUserForm handleSubmit={this.createUser}/>
            <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Role</th>
                <th>-</th>
              </tr>
              </thead>
                <tbody>
            {this.state.users.map((user,index)=>{
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td><Link to={"/user/"+user.name}>View</Link></td>
                </tr>
                )
            })}
                </tbody>
            </table>

            </div>
          </div>
        );

      }
}

export default Home;