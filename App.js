/*
<div>
    <div>
        <h1>I'm an h1 tag</h1>
    </div>
</div>
*/

//Nested React elements
const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    React.createElement(
        "div", 
        {id : "child"},[
        React.createElement("h1", {},"I'm an h1 tag"),       //Making siblings -> will come at same level
        React.createElement("h2",{},"I'm an h2 tag")
        ]
    )
);


// const heading = React.createElement(
//     "h1", 
//     {id : "heading"}, 
//     "Hello World from React"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(parent);