import React, { Component } from 'react';
import {connect} from "react-redux"
import {getRaces} from "../redux"
import Peeps from "../components/Peeps"


class Race extends Component {

    componentDidMount(){
        this.props.getRaces()
    }

    render() {

        const races = this.props.races.map((peeps, i) => <Peeps key={peeps.name + i} {...peeps}/>
        )

        return (
            <div>
                <h1>D&D 5th Edition Races</h1>
                <main className="grid">
                    {races}
                </main>
            </div>
        );
    }
}

export default connect(state=>state, {getRaces})(Race)