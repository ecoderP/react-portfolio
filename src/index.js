import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './App';
import ScrollToTop from './components/scrollToTop';

import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);