import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'

// Components
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import AdminPanelPage from './AdminPanelPage';

//TODO: Написать стартовую страницу.
const Data = () =>(
    <nav>
        <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/admin/user">Admin User</Link></li>
        </ul>
    </nav>
)

const NavigationPage = () => (
        <Switch>
            <Route path="/" exact component={Data}/>
            <Route path="/signin" exact component={SignInPage}/>
            <Route path="/signup" exact component={SignUpPage}/>
            <Route path="/admin/user" exact component={AdminPanelPage}/>
        </Switch>
)

export default NavigationPage