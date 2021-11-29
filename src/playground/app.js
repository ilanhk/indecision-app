class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    };

    //componentDidMount, componentDidUpdate and componentWillUnMount  are Lifecycle methods which you can only access in class based components
    
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); // to turn the json (string) back into an object

            if(options){
                this.setState(()=>({ options })); //because same name as key
        };
        } catch (e){
            //Do nothing at all
        }
    }; 
    //Fetching data

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options); //create a string of the objecy
            localStorage.setItem('options', json ); // you can save stuff in localstorage and you can use it if the page refreshes.'options' is the key and 'json' is the value.

            console.log('Saving Data!')
        }
        
    }; // this method only gets called if props or state values change
    //it can have access to the new props and states by writing this.props or this.state
    // also has access to the old props(1st arguement) and state(2nd arguement)
    //saving data
    
    componentWillUnMount(){
        console.log('Component will Unmount!')
    };
    //can activate when switching pages
    
    handleDeleteOptions(){
        this.setState(()=>({options: []}));
    };
    //handleDeleteOptions method is made for the react component Options 
    // For arrow functions if you want to return an object in a straight line you need to add () over the object

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }));
    }; // in .filter if its false the thing will be removed from the rest of the array if true that item will be the only item in the array

    handlePick(){
        this.setState(()=>{
            const randomNumber = Math.floor(Math.random() * this.state.options.length); // to choose a random number from the length of Options array
            const option = this.state.options[randomNumber];
            alert(option);
        });
    };

    handleAddOption(option){
        if(!option){
            return 'Please Enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1){
            return `this option: ${option}, already exist! Please enter a unique option.`
        } 
        // if greater than -1 index then it exists in the array

        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }; // better to use .concat() then .push() - concat merges 2 arrays (still works if the one being added is not an array) together and not change any while .push adds into the array anc changes it.

    render(){
        const subtitle='Let a computer decide your life.'

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
} // IndecisionApp is the parent component to all the components below (which are all nested components)
// title in header is a component prop - it allows us to create ex different instenses of the header component. If you need the header component different on some pages





const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}; // this is a stateless functional component so its faster than class based components
//if we need to use an advance feature like state use a class based component
// added conditional rendering if their is a subtitle or not the Title is given as default 

Header.defaultProps = {
    title: 'Indecision'
};
// you can make default props like this 
// in this case the default of title is Indecision


const Action =(props)=>{
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
            
        </div>
        );
};
 // method ex handlePick() is called if without brackets handlePick is referenced
// use class method for event calls



const Options = (props)=>{
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started :)</p>}
            {   
                props.options.map((option)=> (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        );
};// key in this case is a reserve prop wont show up as a prop in <Option />


const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
        );
}; 
//You can add and arrow function on on click


class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    };
    handleAddOption(e){
        e.preventDefault(); // to stop the default (full page refresh)
       //
        const option = e.target.elements.option.value.trim(); // e.target will point to the element that e started on in this case its <form>. elements give you a list of elements by name and the name of the input element we are interested is 'option'.
        const error = this.props.handleAddOption(option);   
        
        this.setState(()=>({error})); //if only one key value pair with the same name its common to present the object like this.

        if(!error){
            e.target.elements.option.value ='';
        }; //set form to empty string after clicking submit
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
            );
    }
}



 // <Header/> is a react component and is reusable can use it multiple times


// const User = (props)=>{
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };//this is the syntax of a stateless functional component
//its a function that returns a jsx outside of a class. The function is equivilant of render
// we can pass in props but dont have access to 'this' but props get passed in as a first argument
// stateless functional component is faster than class based components because classes carry a lot especially the React component
// Should use stateless functional component whenever u can 



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));// need this to render stuff to the screen


// type this command in the terminal to overwrite the app.js file in scripts: babel src\app.js --out-file=public/scripts/app.js --presets="env,react" --watch
// --watch at the end will look for changes and make the changes in app.js in scripts folder
// In seperate terminal to set up a live server type: 'live-server public' bc the app.js we want to run is in the public folder





// class Header extends React.Component {
//     render(){
        
//     }
// } //the class header will get all the features of React.Component. So now Header is a react component
// react components needs to define render
// <Header/> is a react component and is reusable can use it multiple times
// <Header/> and <Header><Header/> is identical (different ways to write React components)




//Contructor method goes in a react componenet
// constructor(props){
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this) //.bind() helps you get a function from an object and its first argument you can set the context of where it came from. In this case we want to use this in the handleRemoveAll() method because cant use 'this' in it.
// } // use the constructor function to overide props so that the method handleRemoveAll can use 'this' instead of typing handleRemoveAll.bind(this) all the time. This is more efficient