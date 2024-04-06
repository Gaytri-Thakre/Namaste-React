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

// React Functional Component
const HeadingComponent1 = () =>{
    return (
    <div>
        <h1>Namaste React Functional Component1 </h1>
    </div>
    );
}
// Component Composition
const HeadingComponent2 = () => {
    return(
    <div>
        <HeadingComponent1/>
        <h1>Namaste React Functional Component2 </h1>
        hi oo working like this also
    </div>
    );
};
const headingElement = <h4>{jsxHeading} Namaste React Element</h4>
const HeadingComponent3 =function(){
    return(
        <div>
            {100+500}
            {headingElement}
            <h2>First</h2>
            {HeadingComponent1()}
            <h2>Second</h2>
            <HeadingComponent2/>
            <h2>third</h2>
            <h1>Namaste React Functional Component3</h1>
        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent3/>);