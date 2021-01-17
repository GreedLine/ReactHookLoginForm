import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';


// TODO: Разобраться с тем, почему он билдит только одну страницу. И то криво.
const Home = () => {

}
const Data = () =>(
    <nav>
        <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/admin/user">Admin User</Link></li>
        </ul>
    </nav>
)

const Navigation = () => (
    <div>

        <Switch>
            <Route path="/" exact component={Data}/>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/admin/user" exact component={AdminPanel}/>
        </Switch>
    </div>
)

export default Navigation