console.log('App is running!');

const appRoot = document.getElementById("app");

let visibility = false;

const buttonName = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
        <h1> Visibility toggle</h1>
        <button onClick={buttonName}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div>
            <p>Showing details.</p>
            </div>
        )}
        </div>
    );
ReactDOM.render(template, appRoot);
};

render();