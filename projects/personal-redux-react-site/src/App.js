import React from "react"
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Race from "./components/Race"
import Class from "./components/Class"
import Spells from "./components/Spells"
import Footer from "./components/Footer"

const App = () => {
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/race" component={Race}/>
                <Route path="/classes" component={Class}/>
                <Route path="/spells" component={Spells}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App