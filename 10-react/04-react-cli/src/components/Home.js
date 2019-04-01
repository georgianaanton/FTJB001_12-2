import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    users: []
  }
  componentDidMount(){
    // fetch
    // axios
    fetch("http://localhost:5000/users")
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
        if(res.success == true){
          this.setState({
            users: res.data
          })
        }
      })
  }
    render() {
        return (
          <div className="home">
            <h4 className="text-center">Home Page</h4>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum reiciendis quo eum temporibus quae explicabo et consequuntur debitis enim esse aspernatur natus, quam cumque quaerat harum sequi sunt quis autem?</p> */}

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