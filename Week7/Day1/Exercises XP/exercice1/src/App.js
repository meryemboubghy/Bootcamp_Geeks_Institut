// import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercice from "./Exercise3";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
        <p>{myelement}</p>
        <p>React is {sum} times better with JSX</p>
        <h3>
          {" "}
          the first Name is {user.firstName} , last Name is {user.lastName}
        </h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </header>
      <Exercice />
    </div>
  );
}

export default App;
