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
  const option = e.target.elements.option.value;

  // if there is option, we add it to options array and make option field empty
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

const removeAll = () => {
  app.options = [];
  renderOptions();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

/* const numbers= [55, 101, 1000];  */

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={removeAll}>Remove all</button>
      {
        /*  numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })  */
      }
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptions();



