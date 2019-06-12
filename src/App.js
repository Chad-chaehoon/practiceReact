import React, { useState } from "react";
import Person from "./Person";
import "./App.css";

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("some other state");
  console.log(personState, otherState);

  const switchHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manuaaaa", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchHandler}>Switch</button>
      {personState.persons.map((person, idx) => (
        <Person key={idx} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default App;
