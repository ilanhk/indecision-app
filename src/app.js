import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'; // need to install it. This would make sure all internet browsers would start from the exact same place and load up the css/scss files correctely. We did this by adding a css reset. good to make it a cross browser friendly app
import './styles/styles.scss'; //need to load in the css file to make it work


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));// need this to render stuff to the screen

