import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";

// Components
import Navigation from './pages/Navigation';
import store from './store/store'

// Style
import './index.css';
import './components/InputField/style.scss';
import './components/UserRow/style.scss';
import './components/Pagination/style.scss';
import 'normalize.css';

const history = createBrowserHistory();

render((
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Navigation/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

reportWebVitals();
