import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom"

// import { App } from "./src/App.js"

// ReactDOM.render(<App />, document.getElementById("root"))


const container = document.getElementById('root');
const root = createRoot(container);

const element = React.createElement('div', {className: 'div_name'}, 
          React.createElement('h1', {className: 'div_name'}, 'Header Text'), 
          React.createElement('p', null, 'Paragraph Text'));

root.render(element);
