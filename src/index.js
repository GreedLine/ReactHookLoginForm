import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// TODO: Поработать над БЭМ.

// TODO: Подключить normalize.css
import './components/InputField/style.scss';
import LoginForm from './pages/LoginForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();