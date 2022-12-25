//render() method update itself :
/* 1.when we create component.
   2.when we update "state".
   3.when we update "props".
*/
// We update render() method because we want to re-render updated new values.

import React from "react";

class RenderState extends React.Component{
    constructor(){
        super();
        this.state={
           email:"rs01@reddit.com"
        }
    }
    render(){
       console.warn("Render",this.state.email);
       return(
        <div>
            <p>Render State Life_Cycle_Methods  {this.state.email}</p>
            <button onClick={()=>this.setState({email:"rishav6789@gmail.com"})}>Update Email</button>
        </div>
       )
    }
}

export default RenderState;