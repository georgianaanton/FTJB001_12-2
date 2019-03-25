import React from 'react';
import ReactDOM from 'react-dom';



class MyComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>First Head....</h1>
                <p>some para</p>
                <b>hello friends</b>
            </div>
        )
    }
}



ReactDOM.render(
    // React.createElement(MyComponent, null),
    <MyComponent></MyComponent>,
    document.getElementById("app")
)