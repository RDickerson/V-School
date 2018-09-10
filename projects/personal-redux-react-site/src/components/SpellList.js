import React, { Component } from 'react';
import axios from "axios"
import SpellInfo from "./SpellInfo"


class SpellList extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.url)
        this.state = {
            spellInfo: [],
            clicked: false
        }
    }

   

    handleClick = () => {
        axios.get(this.props.url).then(res => {
            console.log(res.data)
            this.setState(prevState => ({
                spellInfo: res.data,
                clicked: !prevState.clicked
            }))
        })
        
    }

    render() {
        const styles = {
            div: {
                display: "flex",
                justifyContent: "center",
            }
        }
        return (
            <div style={styles.div} onClick={this.handleClick}>
                {
                    this.state.clicked
                    ?   <div>
                            <SpellInfo {...this.state.spellInfo}/>
                        </div>
                    :   <h1>{this.props.name}</h1>
                }
            </div>
        );
    }
}

export default SpellList;