import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';


const Home = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/admin/user">Admin User</Link></li>
        </ul>
    </div>
)

const About = () => (
    <div>
        <p>We are now on the ABOUT page</p>
    </div>
)

const App = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/admin/user" exact component={AdminPanel}/>
    </BrowserRouter>
)
export default App