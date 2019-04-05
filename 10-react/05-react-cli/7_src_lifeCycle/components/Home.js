import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";


class Home extends Component {
  state = {
      users: [
        {name: 'admin', password: 'admin', role:'admin'},
        {name: 'user1', password: 'user', role:'user'}
    ]
  }

  constructor(props){
    super(props);
  }

  addUser = ()=>{
    this.setState({
      users: [
        {name: 'admin', password: 'admin', role:'admin'},
        {name: 'user1', password: 'user', role:'user'},
        {name: 'user2', password: 'user', role:'user'}
      ]
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Previous props were ", prevProps)
    console.log("Previous state were ", prevState)
  }

  
    render() {
        return (
          <div className="home">
            <h4 id="head" className="text-center">Home Page</h4>
<button onClick={this.addUser} className="btn btn-danger">Add</button>
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