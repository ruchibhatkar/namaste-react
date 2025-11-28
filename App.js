import React from "react";
import ReactDOM from "react-dom/client";

//Core react element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX - is HTML like syntax
const jsxHeading = <h1 id="heading">Namaste React from JSX</h1>;

//React functional Component
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from Title Functional Component
  </h1>
);

//React functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {jsxHeading}
    <h2>{100 + 200}</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

//Rendering react functional component
root.render(<HeadingComponent />);
