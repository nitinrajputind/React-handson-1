import React, { useState } from 'react';
import FunctionComp from './Component/FunctionComp';
import './App.css';
import ClassCompo from './Component/ClassComp';


function App() {
  const [fstate, setfState]=useState(false);
  const[cState,setCState]= useState(false);

  console.log(fstate)


  return (
    <>
    <h1 className='heading'>Styling Using Functional and Class Components </h1>
    <div className='btn'>
    <button onClick={()=> setfState(!fstate)}>To see Styling in Function Components</button>
    <button onClick={()=> setCState(!cState)}>To see Styling in Class Components</button>
    </div>

    {/* use Useeffect() for toggling by the button  */}
    {/* {fstate ? <FunctionComp/> : " "} */}
    <div className="main-container">
    {fstate && <FunctionComp/>}
    {cState && <ClassCompo/>}
    </div>

    
    </>
  );
}

export default App;
