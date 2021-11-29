//Component state counter example

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }; //this is the default component state object which we will change with events 
    };

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)){
            this.setState(()=>({ count }));
        }; 
        
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState != this.state){
            localStorage.setItem('count', this.state.count ); // you can save stuff in localstorage and you can use it if the page refreshes.'options' is the key and 'json' is the value.
        };  
    };

    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            };
        }); //this.setState() allows us to manipulate the state and it will refresh automatically. 
        //.setState() takes a function that updates the state and returns an object
        //the first argument of this function is ususally the previous state of state. You can name it what you like but is this case we will call the argument prevState
        //prevState = this.state
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        this.setState(()=>{
            return{
                count: 0
            };
        });// prefered syntax
        
        //this is for example purposes
        // this.setState((prevState)=>{
        //     return{
        //         count: prevState.count +1
        //     };
        // }); // if you add this it would already know the updated state which is 0 so it would add 1 which 1 will show up on the screen instead of zero because its asychronous

        //older version and alternative to setState
        // this.setState({
        //     count:0
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });
        //this.setState is asychronous. In this case it doesnt update the state back to 0 it increments it thats why we do the new way

    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    };
};



ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));