import React, { Component } from 'react';
import {connect} from "react-redux"
import {getSpells} from "../redux"
import SpellList from "./SpellList"

class Spells extends Component {

    componentDidMount(){
        this.props.getSpells()
    }

    render() {
        // console.log(this.props.spells)
        const spells = this.props.spells.map(spell => <SpellList key={spell.url} {...spell}/>)

        return (
            <div>
                <h1>D&D 5th Edition Spells</h1>
                <div>
                    {spells}
                </div>
            </div>
        );
    }
}

export default connect(state=>state, {getSpells})(Spells);