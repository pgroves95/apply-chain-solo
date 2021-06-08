import React from 'react'
import '../styles/Nav.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ApplyForm from './Applicant/ApplyForm'
import ViewAllApps from './HiringManager/ViewAllApps'
import NotFound404 from './NotFound404'
import Home from './Home'
import logo from '../logo.png' 

function Nav() {
    return (
       <Router>
           <div className="container">
               <img src={logo} alt="logo" /> 
               <h5><Link to="/apply">Apply</Link></h5>
               <h5><Link to="/view-all-apps">View Applications</Link></h5>
               <h5><Link to="/">Home</Link></h5>
           </div>
       <Switch>
        <Route exact path="/apply">
            <ApplyForm />
        </Route>
        <Route path="/view-all-apps">
            <ViewAllApps />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/*">
            <NotFound404 />
        </Route>       
       </Switch>
       </Router>

    )
}

export default Nav
