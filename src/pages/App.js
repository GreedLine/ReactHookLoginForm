import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';


const Home = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
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
    </BrowserRouter>
)
export default App