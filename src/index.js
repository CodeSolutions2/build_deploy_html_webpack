import React from "react";
import { createRoot } from 'react-dom/client';
//import "./style.css";
import * as css from "style.css";

// import { App } from "./src/App.js"

// -----------------------------------------

// [0] Building-Deploying JavaScript code using Node.js: WORKED
// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = "Hello from Node.js!";
// document.body.append(helloDiv);

// -----------------------------------------

// [1] Building-Deploying React code using Node.js: 
const container = document.getElementById('root');
const root = createRoot(container);
const element = React.createElement('div', {className: 'div_name'}, 
                                    React.createElement('h1', {className: 'h1_element'}, 'Header Text'), 
                                    React.createElement('p', {className: 'p_element'}, 'Paragraph Text'));

const random_HEX_color = () =>  `#${Math.random().toString(16).slice(2,8)}`;
document.querySelector('.h1_element').style.color = random_HEX_color;

root.render(element);
// OR
// ReactDOM.render(<App />, container)
