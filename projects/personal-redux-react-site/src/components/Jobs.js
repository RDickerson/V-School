import React, {Component} from 'react';
import axios from "axios"
import JobsInfo from "./JobsInfo"
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

const images = {
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

class Jobs extends Component {
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
            console.log(res.data)
            const info = res.data
            this.setState(preveState => ({
                info: info,
                clicked: !preveState.clicked
            }))
            
        })
    }

    render(){
        // console.log(this.state.info)
        return (
            <div onClick={this.handleClick}>
                {
                    this.state.clicked 
                    ?   <JobsInfo {...this.state.info} image={this.state.img} />
                    :   <figure className="figs">
                            <img src={images[this.props.name]} alt=""/>
                            <figcaption>{this.props.name}</figcaption>
                        </figure>
                }
            </div>
        )    
    }
};

export default Jobs;