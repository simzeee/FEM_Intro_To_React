import React from "react";
import { render } from "react-dom";
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Eddie",
      animal: "Dog",
      breed: "Toy Poodle",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Kitty",
      animal: "Cat",
      breed: "Street Cat",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
