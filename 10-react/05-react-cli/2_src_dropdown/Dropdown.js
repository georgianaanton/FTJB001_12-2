
import React, { Component } from 'react';
import ItemList from './ItemList';
import Button from './Button';

class Dropdown extends Component{

    state={
        open: false,
        btnTitle: ""
    }

    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.state);
    }

    handleShow = ()=>{
        // toggle -> boolean
        this.setState({
            open: !this.state.open
        })
    }

    changeTitle = (e)=>{
        console.log(e.target);
        console.log(e.target.innerText);
        this.setState({
            btnTitle: e.target.innerText,
            open: !this.state.open
        })
        // this.handleShow();
    }

    render(){
        const list = this.props.countries.map((country, index)=>{
            return (
                <ItemList key={index} changeTitle={this.changeTitle} country={country}/>
            )
        });
        return (
            <div>

                <h3>It is dropdown</h3>

                <div className={"dropdown"+(this.state.open?'show':'')}>
                    <Button handleShow={this.handleShow} selectedTitle = {this.state.btnTitle || this.props.title} />
                    <div className={"dropdown-menu"+(this.state.open?'show':'')} aria-labelledby="dropdownMenuButton">

                        {list}

                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;