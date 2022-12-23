import React from 'react';

const Props = (props)=>{  //Arrow function
    return(
        <div>
            <p>Pass function as props</p>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}

export default Props;