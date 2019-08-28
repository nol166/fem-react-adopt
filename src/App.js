const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
