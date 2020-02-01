'use strict';

console.log('App.js is running!');

// JSX - Javascript XML (Javascript Syntax Extension)\

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
