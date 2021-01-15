import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { createBrowserHistory } from "history";
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';

const history = createBrowserHistory();

// TODO: Разобраться с тем, почему он билдит только одну страницу. И то криво.

const Home = () => (
    <div>
        <ul>
            <li><Link to="/index">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/admin/user">Admin User</Link></li>
        </ul>
    </div>
)

const App = () => (
    <BrowserRouter>
        <Route path="/index" exact component={Home}/>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/admin/user" exact component={AdminPanel}/>
    </BrowserRouter>
)
export default App