import React, { Component } from "react";

class ClassCompo extends Component {
  render() {
    return (
      <div className="ClassComp fixed">
        <div className="content">
          <h1>This is Created using class Component</h1>
          <p className="red">This is done using external CSS</p>
          <p style={{ color: "blue", fontSize:"18px"}}>This is done by usng inline Css</p>
        </div>
      </div>
    );
  }
}

export default ClassCompo;
