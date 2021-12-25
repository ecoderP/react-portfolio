import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './App';

import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <Router baseline="/react-portfolio">
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);