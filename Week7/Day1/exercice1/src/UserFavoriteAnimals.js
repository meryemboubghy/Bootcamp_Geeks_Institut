import App from "./App";
import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props;
    return (
      <div>
        <h3> Favoraite Animals</h3>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
