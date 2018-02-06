// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// BOOTSTRAP & JQUERY 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

require("font-awesome-webpack");

// CSS STYLE 
import '../css/styles.scss';

// COMPONENTS
import {Layout} from './Layout.jsx';

ReactDOM.render(<Layout />,document.getElementById('app'));