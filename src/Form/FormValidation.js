/* useState is the first "Hook"
 With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. */

import React,{useState} from "react";//Hooks call

function Login()
{
//Declare multiple state variables and Hooks
   //state for data input
   const[user,setUser]=useState("");
   const[password,setPassword]=useState("");
   //state for Validation
   const[userErr,setUserErr]=useState(false);
   const[passErr,setPassErr]=useState(false);

   function loginHandle(e)
    {
    // console.log(e);
    if(user.length < 6 || password.length < 8)
        {
            alert("type correct values");
        }
        else{
            alert("Form Submitted ")
        }
        e.preventDefault();//When click on Login button page reload which is not acceptable in react.js to prevent this use preventDefault() event method.
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length < 6)
        {
           setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        console.warn(e.target.value.length);
        setUser(item);
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(item.length < 8)
        {
           setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        console.warn(e.target.value.length);
        setPassword(item);
    }
    return(
        <div>
            <h4>Form Validation</h4>
            <form onSubmit={loginHandle}>

            <input  type="text" placeholder="Enter User Id" onChange={userHandler} /> <br/>
            {userErr ? <span>Invalid User name</span> : <span>Valid User name</span> }
            <br/>

            <input  type="password" placeholder="Enter Password" onChange={passwordHandler}/> <br/>{passErr ? <span>Invalid Password
            </span> : <span>Valid Password</span> }
            <br/> <br/>

            <button type="submit">Login</button>
            <br/>
            </form>
        </div>
    )
}
export default Login;