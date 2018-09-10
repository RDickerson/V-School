import React from 'react';
import background from "../images/background.jpg"

const Home = () => {

    const styles = {
        div: {
            display: "flex",
            justifyContent: "center"
        },
        
    }

    return (
        <div style={styles}>
            <img className="dnd" src={background} alt=""/>
        </div>
    );
};

export default Home;