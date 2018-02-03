// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// BOOTSTRAP & JQUERY 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import fontAwesome from 'font-awesome/scss/font-awesome.scss';

// CSS STYLE 
import '../css/styles.scss';

// COMPONENTS
import {Layout} from './Layout.jsx';

ReactDOM.render(<Layout />,document.getElementById('app'));