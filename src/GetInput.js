//Hooks were added to React in version 16.8.

// Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

//The React "useState" Hook allows us to track state in a function component.
import React, {useState} from 'react'

function Input(){

    //setData and setPrint are function that used to updates the state.
    const[data,setData]=useState();//state for onChange//parameter of useState is empty means null
    const[print,setPrint]=useState(false);//state for onClick

    function getData(val)
    {
        console.warn(val.target.value);
        setData(val.target.value);
        // setPrint(false);  //remove words then print values are also deleted
    }
    return(
        <div>
        {
            print ? <p>{data}</p> : null //To print what we write in box by button Print Data 
        }
            <h2>{data}</h2>
            {/* what will be we type that print on the screen by getData and setData */}
            <input type="text" onChange={getData} />
            {/* setPrint */}
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}

export default Input;