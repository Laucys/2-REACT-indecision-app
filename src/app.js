console.log("App.js is running!");

// JSX - Javascript XML (Javascript Syntax Extension)\

const app = {
  title: 'Indecision App',
  subtitle: 'App subtitle',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  // targeting to event target which is form, and from all elements select option
  const option = e.target.elements.option;

  // if there is option, we add it to options array and make option field empty
  if(option) {
    app.options.push(option);
    option.value = '';
    renderOptions();
  }
};

const removeAll = () => {
  app.options = [];
  renderOptions();
};

const appRoot = document.getElementById("app");

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptions();



