import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserActions from "./../actions/userActions"

class Home extends Component {
  // state = {
  //     users: [
  //       {name: 'admin', password: 'admin', role:'admin'},
  //       {name: 'user', password: 'user', role:'user'}
  //   ]
  // }

  // constructor(props){
  //   super(props);
    
  // }
  componentDidMount(){
    console.log(this.props);
  }

  addNewUser = ()=>{
    const user = {name: 'Amit', password: 'qwerty', role:'admin'}
    this.props.addUser(user);
  }
  
  
    render() {
        return (
          <div className="home">
            <h4 className="text-center">Home Page</h4>
            <button className="btn btn-success btn-lg" onClick={this.addNewUser}>Add User</button>
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
            {this.props.users.map((user,index)=>{
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

const mapStateToProps = (state)=>{
  return {
    // obj: {
    //   id: 55, title: 'react book', price: 55.9
    // }
    users: state.users
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    // addUser: (user)=>dispatch({type:'ADD_USER', payload: user})
    addUser: (user)=>dispatch(UserActions.addUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);