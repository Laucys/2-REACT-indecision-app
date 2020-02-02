'use strict';

console.log("App.js is running!");

// JSX - Javascript XML (Javascript Syntax Extension)\

var app = {
  title: 'Indecision App',
  subtitle: 'App subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  // targeting to event target which is form, and from all elements select option
  var option = e.target.elements.option;

  // if there is option, we add it to options array and make option field empty
  if (option) {
    app.options.push(option);
    option.value = '';
    renderOptions();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderOptions();
};

var appRoot = document.getElementById("app");

var renderOptions = function renderOptions() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderOptions();
