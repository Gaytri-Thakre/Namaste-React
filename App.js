import React from "react";
import ReactDOM from "react-dom/client";

// React Element:
// React.createElement=object=>rendered on DOM become HTML element
// Creating React element using core React
const heading = React.createElement("h1",{id:"heading"},"Namaste react ");
// Creating React element using JSX
// JSX transpiled before it reaches the JS engine
// parcel is doing this transpilation with help of babel
const jsxHeading = (<h1 className="heading">Namaste React using JSX</h1>);
// jsx =>React.createElement =>JS Object =>Rendered on DOM as HTML element
// console.log(heading );
console.log(jsxHeading );
// same thing both are React element


const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);