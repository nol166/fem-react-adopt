import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-importnat" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mac",
      animal: "Cat",
      breed: "House Panther"
    }),
    React.createElement(Pet, {
      name: "Chip",
      animal: "Parakeet",
      breed: "Cool"
    }),
    React.createElement(Pet, { name: "Ava", animal: "Cat", breed: "Sleek" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
