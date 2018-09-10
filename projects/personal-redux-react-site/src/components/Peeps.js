import React, {Component} from 'react';
import axios from "axios"
import PeepsInfo from "./PeepsInfo"
import Barbarian from "../images/classes/barbarian.png"
import Bard from "../images/classes/bard.png"
import Cleric from "../images/classes/cleric.png"
import Druid from "../images/classes/druid.png"
import Fighter from "../images/classes/fighter.png"
import Monk from "../images/classes/monk.png"
import Paladin from "../images/classes/paladin.png"
import Ranger from "../images/classes/ranger.png"
import Rogue from "../images/classes/rogue.png"
import Sorcerer from "../images/classes/sorcerer.png"
import Warlock from "../images/classes/warlock.png"
import Wizard from "../images/classes/wizard.png"
import Dragonborn from "../images/races/dragonborn.png"
import Dwarf from "../images/races/dwarf.png"
import Elf from "../images/races/elf.png"
import Gnome from "../images/races/gnome.png"
import HalfElf from "../images/races/half-elf.png"
import HalfOrc from "../images/races/half-orc.png"
import Halfling from "../images/races/halfling.png"
import Human from "../images/races/human.png"
import Tiefling from "../images/races/tiefling.png"

const images = {
    Dragonborn,
    Dwarf,
    Elf,
    Gnome,
    "Half-Elf": HalfElf,
    "Half-Orc": HalfOrc,
    Halfling,
    Human,
    Tiefling,
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard
}

class Peeps extends Component {
    constructor(){
        super()

        this.state = {
            img: images,
            info: [],
            clicked: false
        }
    }


    handleClick = () => {
        axios.get(this.props.url).then(res => {
            const info = res.data
            this.setState(preveState => ({
                info: info,
                clicked: !preveState.clicked
            }))
            
        })
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                {
                    this.state.clicked 
                    ?   <PeepsInfo {...this.state.info} image={this.state.img} />
                    :   <figure className="figs">
                            <img src={images[this.props.name]} alt=""/>
                            <figcaption>{this.props.name}</figcaption>
                        </figure>
                }
            </div>
        )    
    }
};

export default Peeps;