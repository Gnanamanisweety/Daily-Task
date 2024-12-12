import React, { Component } from "react";

class SimpleComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue", fontSize: "24px", backgroundColor:"darkgrey",textAlign:"center" }}><b>Class Components</b></h1>
        <p style={{ color: "black", fontSize: "16px", backgroundColor:"lightcyan" }}>
        A class component in React is a blueprint for creating stateful components. It is an ES6 class that extends React. Component and includes a render() method to return JSX. Class components can maintain state and use lifecycle methods to handle component behavior.
        </p>
      </div>
    );
  }
}

export default SimpleComponent;
