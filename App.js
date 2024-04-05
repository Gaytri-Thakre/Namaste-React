// const heading = React.createElement("h1",{id:"head"},"Hello World from React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <div id="parent">
//     <div id="child">
//         <h1></h1>
//     </div>
// </div>
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); 

// <div id="parent">
//     <div id="child">
//         <h1></h1>
//          <h2></h2>
//     </div>
//     <div id="child">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 