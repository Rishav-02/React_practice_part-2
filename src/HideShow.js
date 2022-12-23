import React,{useState} from "react";

function HideShow(){
    //useState by default 'true' means data showed
    let[status,setStatus]=useState(true);//state for onClick
    return(
    // status true then data i.e Rishav Raj will show if false then nothing show
        <div>
        {
            status ? <p>Rishav Raj</p> : null
        }
            {/* Click Hide button then shown data will be hidden */}
            <button onClick={()=>setStatus(false)}>Hide</button>
            {/* Click Show button then hidden data will be showed */}
            <button onClick={()=>setStatus(true)}>Show</button>
            <br /><br />
            {/* Toogle means Hide and Show data by one button.status true then hide and status false then show data */}
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default HideShow;