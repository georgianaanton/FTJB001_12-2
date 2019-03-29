import React from 'react';

// class Button extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
    const Button = (props)=>{
        return (
            <button onClick={props.handleShow} className="btn btn-secondary btn-block btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.selectedTitle}                        
            </button>
        )
//    }
}

export default Button;