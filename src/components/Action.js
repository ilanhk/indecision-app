import React from "react";

const Action =(props)=>(
        
        <div>
            <button className="big-button" onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
            
        </div>
        );

 // method ex handlePick() is called if without brackets handlePick is referenced
// use class method for event calls

export default Action;