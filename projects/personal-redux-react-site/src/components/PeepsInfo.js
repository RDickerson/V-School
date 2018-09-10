import React from 'react';

const PeepsInfo = (props) => {
    
    const styles = {
        div: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "darkgray",
            backgroundImage: `url(${props.image[props.name]})`,
            borderRadius: "50px",
            backgroundRepeat: "no-repeat",
            color: "white",
            fontSize: "24px",
            height: "615px"
        },
        h1: {
            margin: "3px"
        }
    }

    const language = props.languages.map(lanugage => <p>{lanugage.name}</p>)
    const traits = props.traits.map(trait => <p>{trait.name}</p>)

    return (
        <div style={styles.div}>
            <h1 style={styles.hq}>{props.name}</h1>
            <p>Size: {props.size}</p>
            <p>Base Speed: {props.speed}ft</p>
            <div>
                Languages: {language}
            </div>
            <div>
                Traits: {traits}
            </div>
        </div>
    );
};

export default PeepsInfo;