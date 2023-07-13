import React from "react";
import "../App.css";
const FunctionComp = () => {
  return (
    <div className="functionClass fixed1">
      <div className="content">
        <h1>This is Created using Functional Component</h1>
        <p className="red">This is done by External Css</p>
        <p style={{ color: "blue", fontSize:"18px"}}>This is Done by inline CSS</p>
      </div>
    </div>
  );
};

export default FunctionComp;
