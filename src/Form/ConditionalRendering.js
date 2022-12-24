// Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

import { useState } from "react";

export default function Profile()
{
    // argument of useState changes as 1,2,3,etc.
    //The initial state argument is only used during the first render. i.e here 1 is the initial state

    const[loggedIn,setLoggedIn]=useState(1);
    return(
        <div>
        {/* conditional operator:- condition ? true : false */}
            {loggedIn===1 ? <p>Welcome Rishav</p> : loggedIn===2 ? <p>Welcome Alok</p> : <p>Welcome Aditya</p> }
        </div>
    )
}