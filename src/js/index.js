// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// BOOTSTRAP & JQUERY
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../src/css/component/styles.scss';

// COMPONENTS
import {Layout} from './components/Layout.jsx';

ReactDOM.render(<Layout />,document.getElementById('app'));