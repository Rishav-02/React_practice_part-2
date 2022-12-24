import React from 'react';
import './App.css';

import Input from './GetInput';
import HideShow from './HideShow';
import HandleForm from './Form/HandleForm';
import Profile from './Form/ConditionalRendering';
import Login from './Form/FormValidation';
import Car from './Hooks/Hook';
import Vehicle from './Hooks/UpdateState';
import Props from './PropsFunction';
import LCM from './Life_Cycle_Methods/Constructor-LCM';
import Render from './Life_Cycle_Methods/RenderProps-LCM';
import RenderState from './Life_Cycle_Methods/RenderState-LCM';
import Mounting from './Life_Cycle_Methods/componentDidMount';
import Updating from './Life_Cycle_Methods/componentDidUpdate';

function App() {
  const[name,setName]=React.useState("Rishav");//this hooks for Render class
  //Data() function is for PropsFunction.js
  function Data()
  {
      alert("Hello from app")
  }
  return (
    <div className="App">
        <h2>
           Render React
        </h2>
        <Input />
        <br /><br />
        <HideShow />
        <HandleForm />
        <Profile />
        <Login />
        <Car/>
        <Vehicle/>
        <Props data={Data}/>
        <LCM/>
        <div>
        <Render name={name}/>
        <button onClick={()=>setName("Sinha")}>Update Name</button>
        </div>
        <RenderState/>
        <Mounting/>
        <Updating />
    </div>
  );
}

export default App;
