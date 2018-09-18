import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import Report from "./components/Report"

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ LogIn }/>
                <Route path="/home" component={ Home }/>
                <Route path="/report" component={ Report }/>
            </Switch>
        </div>
    )
}

export default App