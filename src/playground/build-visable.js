console.log('build-visable.js is running');

//Visability toggle - render, constructor, handleToggleVisability()
// visability = false

class Visability_Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisability = this.handleToggleVisability.bind(this);
        this.state={
            visibility: false
        };
        
    };

    handleToggleVisability(){
        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility
            };
        })
    };

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisability} name="button">
                    {this.state.visibility? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <p>Here are the details you can see: blah blah blah ... blah :p</p>
                )}
            </div> 
        );
    };

};

ReactDOM.render(<Visability_Toggle />, document.getElementById('app'));





// let visibility = false;

// const onShowOrNotShow = ()=>{
//     visibility = !visibility; // if visibility = true then it will equal to the opposite false and vice versa.
//     render();
// };


// const appRoot = document.getElementById('app');

// const render = ()=>{
//     const template = (
        // <div>
        // <h1>Visibility Toggle</h1>
        // <button onClick={onShowOrNotShow} name="button">
        //     {visibility? 'Hide Details' : 'Show Details'}
        // </button>
        // {visibility && (
        //     <p>Here are the details you can see: blah blah blah ... blah :p</p>
        // )}
        // </div>
//     );

//     ReactDOM.render(template, appRoot);
// };
// // the statement && (the action) - like another if statment this is called a logic operator 
// //the button if statment is called a turnary operator
// //we use the logic operator for the details because we want just one thing we want to render instead one of 2 things. instead of <p> you can add a <div> and whatever to make it more complex.

// render();