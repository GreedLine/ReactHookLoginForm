import React from 'react';
import {render} from 'react-dom';
import './index.css';
import './components/InputField/style.scss';
import './components/UserRow/style.scss';
import './components/Pagination/style.scss';
import Navigation from './pages/Navigation';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

render((
    <BrowserRouter history={history}>
        <Navigation/>
    </BrowserRouter>
), document.getElementById('root'));

reportWebVitals();
