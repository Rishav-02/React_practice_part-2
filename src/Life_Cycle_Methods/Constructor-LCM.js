// The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

//The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

import React from "react";

class LCM extends React.Component{
//The constructor method is called, by React, every time you make a component:
    constructor(){
      super();
      this.state={
        data:"Delhi"
      }
    }
    render(){
      return(
        <div>
            <p>Hello,{this.state.data}</p>
        </div>
      )   
    }
}

export default LCM;