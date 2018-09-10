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

    const proficiencies = props.proficiencies.map(pros => <p>{pros.name}</p>)

    return (
        <div style={styles.div}>
            <h1 style={styles.hq}>{props.name}</h1>
            <div>
                Proficiencies: {proficiencies}
            </div>
        </div>
    );
};

export default PeepsInfo;