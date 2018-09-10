import React from 'react';

const SpellInfo = (props) => {

    const users = props.classes.map(user => <p>{user.name}</p>)
    const components = props.components.map((component) => <span>{component}, </span>)
    return (
        <div className="spells">
            <h1>{props.name}</h1>
            <p>Classes: {users}</p>
            <p>Level: {props.level}</p>
            <p>Concentration: {props.concentration}</p>
            <p>Casting time: {props.casting_time}</p>
            <p>Duration: {props.duration}</p>
            <p>Range: {props.range}</p>
            <div>Components: {components}</div>
            <p>{props.desc}</p>
        </div>
    );
};

export default SpellInfo;