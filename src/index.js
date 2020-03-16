import React from 'react';
import ReactDOM from 'react-dom';
import './node/@mdi/font/css/materialdesignicons.min.css';
// import './node/materialize-css/dist/css/materialize.min.css';
// import './node/materialize-css/dist/js/materialize.min.js';
import App from './App';
import './styles/styles.scss'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA