import React, { Component } from "react";
import "./Exercise.css";
class Exercice extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://react.dev">This is a link</a>
        <h2>This is a Form</h2>
        <p>Enter your name :</p>
        <div>
          <input type="text"></input>
          <button>Submite</button>
        </div>
        <br></br>
        <h2>Here is an Image :</h2>
        <img
          src="/react.jpg"
          alt="react logo"
          style={{ width: "500px", maxWidth: "100%" }}
        ></img>
        <h3> This is a list</h3>
        <ul
          style={{
            listStyleType: "disc",
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </>
    );
  }
}
export default Exercice;
