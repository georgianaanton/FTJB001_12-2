import React, {Component} from 'react';

class Person extends Component{
    state = {
        name: 'arun', 
        age: 34
    }
    contact= '123456';
    
    constructor(props){
        super(props);
        console.log(this.props)
    }

    changeContact = function(){
        var num = Math.floor(Math.random()*10);
        this.contact = num%2 == 0 ? '123456':'96325';
        console.log("changed contact", this.contact);
    }.bind(this)

    changeAge = ()=>{
        // var num = Math.floor(Math.random()*100);
        // this.state.age = num;
        this.setState({
            age: Math.floor(Math.random()*100),
            a: console.log("in set state")
        })
        console.log("state age", this.state.age);
    }
    render(){
        var address = "pune";
        return(
            <div>
                <p>My address is : {address}</p>
                <p>My name is {this.state.name} and I am {this.state.age}</p>
                <p>My contact is : {this.contact}</p>
                <p>My email is : {this.props.email}</p>

                <button onClick={this.changeContact}>Change Contact</button>
                <button onClick={this.changeAge}>Change Age</button>
            </div>
            )
    }
}

export default Person;