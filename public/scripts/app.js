"use strict";

console.log("App.js is running!");

// JSX - Javascript XML (Javascript Syntax Extension)\

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " Item one "
    ),
    React.createElement(
      "li",
      null,
      " Item two "
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "React App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " Item one "
    ),
    React.createElement(
      "li",
      null,
      " Item two "
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
