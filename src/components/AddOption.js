import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    
    handleAddOption = (e)=>{
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
            );
    };
};