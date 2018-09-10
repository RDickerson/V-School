import React, { Component } from 'react';
import {connect} from "react-redux"
import {getClasses} from "../redux"
import Jobs from "../components/Jobs"



class Class extends Component {
    componentDidMount(){
        this.props.getClasses()
    }
        
    
    render() {
        const classes = this.props.classes.map((jobs, i) => {
            return <Jobs key={jobs.name + i} {...jobs}/>
        })

        return (
            <div>
                <h1>D&D 5th Edition Classes</h1>
                <main className="grid">
                    {classes}
                </main>
            </div>
        );
    }
}

export default connect(state=>state, {getClasses})(Class);