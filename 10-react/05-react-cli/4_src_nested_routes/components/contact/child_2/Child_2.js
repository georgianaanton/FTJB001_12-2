import React, { Component } from 'react';

class Child_2 extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className="Child_2">
        <h4 className="text-center">Child_2 Page</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti rerum nam possimus soluta iure eius veritatis at atque? Possimus nostrum at aperiam illo! Ipsam cum quisquam facere! Dolore, totam.</p>
      </div>
    );
  }
}

export default Child_2;