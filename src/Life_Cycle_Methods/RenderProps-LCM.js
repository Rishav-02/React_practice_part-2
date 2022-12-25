import React from "react";

class Render extends React.Component{
    //The render() method is required, and is the method that actually outputs the HTML to the DOM.
    render()
    {
        console.warn("Render method",this.props);
        return(
            <div>
                <p>Render Props Life Cycle Method  {this.props.name}</p>               
            </div>
        )
    }
}

export default Render;