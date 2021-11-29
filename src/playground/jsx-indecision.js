console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Skynet will take over from here :)',
    options: []
}

// JSX(JavaScript XML) provided to us by React good tool for us to define our templates and put data into them

const onFormSubmit = (e)=>{
    e.preventDefault(); // to stop the default (full page refresh)

    const option = e.target.elements.option.value; // e.target will point to the element that e started on in this case its <form>. elements give you a list of elements by name and the name of the input element we are interested is 'option'.

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    };

    renderApp();
};

//Create 'Remove All Button' above list
// onclick --> wipe the array and rerender\
const removeAllOptions = ()=>{
    app.options = [];

    renderApp();
};

const onMakeDecision = ()=>{
    const randomNumber = Math.floor(Math.random() * app.options.length); // to choose a random option number
    const option = app.options[randomNumber];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ? 'Here are your options:' : 'There are no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAllOptions}>Remove All</button>

            <ol>
                {
                   app.options.map((option)=> <li key={option}>{option}</li>) 
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        ); //THis is JSX syntax but the browser wont recognise it need to install babel so it can translate it to a recognisable JS. 
        // When writing mutiple html elements in JSX you must wrap it with a div (called a wrapper div sometimes). 
        // dont need to brackets but easier to read
        // if you want to add JS variables to the template write it in a {}
        // form has an event handler from 'onSubmit' so that the page wont refresh every time you submit the form 
        //you can get more event handlers for different situations on this website: https://reactjs.org/docs/events.html
        // only want to reference 'onFormSubmit' function not call it bc 
        // map is like for each to handle arrays. map accepts a function
        //disable would disable a button. For a JSX if the disable = true it will work if its false disable wont work. Hence the statment.
    
    ReactDOM.render(template, appRoot);

};

renderApp();
