import React from 'react';

// class ItemList extends Component{
    // constructor(props){
    //     super(props);
    // }
const ItemList = (props)=>{
    return (
        <a className="dropdown-item"
            onClick={props.changeTitle}>
                {props.country}
        </a>
    )
}

export default ItemList;