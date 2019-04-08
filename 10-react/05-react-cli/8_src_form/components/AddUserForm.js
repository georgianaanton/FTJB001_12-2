import React, { Component } from 'react';

class AddUserForm extends Component {

    state = {
        name: ''
    }
    submit =(e)=>{
        e.preventDefault();
        console.log('submited', this.state);
        //ajax
        this.props.handleSubmit(this.state)
        this.setState({
            name: ''
        })
    }

    handleChange =(e)=>{
        console.log(e.target.id);
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    render() {
        return (
          <form onSubmit={this.submit}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
                </div>
            </div>

            <div>
                <button>Submit</button>
            </div>

            </form>
        );

      }
}

export default AddUserForm;