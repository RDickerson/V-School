import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/race">Race</Link>
            <Link className="link" to="/classes">Class</Link>
            <Link className="link" to="/spells">Spells</Link>
        </div>
    )
}

export default Navbar