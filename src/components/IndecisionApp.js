import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = ()=>{
        this.setState(()=>({options: []}));
    };
    //handleDeleteOptions method is made for the react component Options 
    // For arrow functions if you want to return an object in a straight line you need to add () over the object

    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }));
    }; // in .filter if its false the thing will be removed from the rest of the array if true that item will be the only item in the array

    handleClearSelectedOption = ()=>{
        this.setState(()=>({
            selectedOption: undefined
        }));
    };

    handlePick = ()=>{
        this.setState(()=>{
            const randomNumber = Math.floor(Math.random() * this.state.options.length); // to choose a random number from the length of Options array
            const option = this.state.options[randomNumber];
            this.setState(()=>({
                selectedOption: option
            }));
        });
    };

    handleAddOption = (option)=>{
        if(!option){
            return 'Please Enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1){
            return `this option: ${option}, already exist! Please enter a unique option.`
        } 
        // if greater than -1 index then it exists in the array

        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }; // better to use .concat() then .push() - concat merges 2 arrays (still works if the one being added is not an array) together and not change any while .push adds into the array anc changes it.


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
    
    render(){
        const subtitle='Let a computer decide your life.'

        return (
            <div>
                <Header subtitle={subtitle}/>

                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
               
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption ={this.handleClearSelectedOption} 
                />
            </div>
        );
    }
} // IndecisionApp is the parent component to all the components below (which are all nested components)
// title in header is a component prop - it allows us to create ex different instenses of the header component. If you need the header component different on some pages


