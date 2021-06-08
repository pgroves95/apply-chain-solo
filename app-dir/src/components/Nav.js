import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Nav() {
    return (
       <Router>
           <div>
               <h3><Link to="/apply">Link Name</Link></h3>
               <h3><Link to="/view-all-apps">Link Name</Link></h3>
               <h3><Link to="/application-details">Link Name</Link></h3>
           </div>
       <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/">

        </Route>
        <Route path="/">

        </Route>    
       </Switch>
       </Router>

    )
}

export default Nav
