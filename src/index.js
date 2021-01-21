import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

// Components
import NavigationPage from './pages/NavigationPage';
import store from './store/store'

// Style
import './index.css';
import './components/InputField/style.scss';
import './components/UserRow/style.scss';
import './components/Pagination/style.scss';
import './components/NavigationPanel/style.scss';
import './components/Header/style.scss';
import './pages/adminPanel.scss';
import 'normalize.css';

render((
    <Provider store={store}>
        <BrowserRouter>
            <NavigationPage/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

reportWebVitals();
