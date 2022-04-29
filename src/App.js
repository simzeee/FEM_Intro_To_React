import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Eddy" animal="Dog" breed="Toy Poodle"></Pet>
      <Pet name="Kitty" animal="Cat" breed="Street Cat"></Pet>
      <SearchParams/>
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Eddie",
//       animal: "Dog",
//       breed: "Toy Poodle",
//     }),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Kitty",
//       animal: "Cat",
//       breed: "Street Cat",
//     }),
//   ]);
// };

render(React.createElement(App), document.getElementById("root"));
