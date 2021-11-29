import React from "react";


const Header = (props)=>(
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
            
        </div>
    );
 // this is a stateless functional component so its faster than class based components
//if we need to use an advance feature like state use a class based component
// added conditional rendering if their is a subtitle or not the Title is given as default 
//no support for class in a div in jsx use className 

Header.defaultProps = {
    title: 'Indecision'
};
// you can make default props like this 
// in this case the default of title is Indecision

export default Header;