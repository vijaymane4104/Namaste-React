const parent = React.createElement(
  "div",
  {
    id: "Parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "hading" }, "I am a header"),
      React.createElement("h1", { id: "hading" }, "I am a header2"),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "hading" }, "I am a header"),
      React.createElement("h1", { id: "hading" }, "I am a header2"),
    ]),
  ]
);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React !"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
