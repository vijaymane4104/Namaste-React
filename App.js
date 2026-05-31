import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "Parent",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "heading" }, "This is a Namaste React"),
      React.createElement("h1", { id: "heading" }, "I am a header2"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading" }, "I am a header"),
      React.createElement("h1", { id: "heading" }, "I am a header2"),
    ]),
  ],
);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React !",
);

const JsxHeading = () => <h1 id="heading">This is Namste React from JSX</h1>;

const HeadingComponent = () => (
  <div id="Container">
    {JsxHeading()}
    <JsxHeading />
    <JsxHeading></JsxHeading>
    <h1>Namste React funtional Component</h1>
  </div>
);

console.log(JsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
