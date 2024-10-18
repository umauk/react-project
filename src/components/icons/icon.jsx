import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '20px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',  // Cursor change to indicate clickable
    },
    icon: {
        fontSize: '30px',
        marginRight: '10px',
    },
    text: {
        margin: 0,
    },
};

const IconExample = ({ setView }) => {
    return (
        <div style={styles.container}>
            <div style={styles.item} onClick={() => setView("findSpot")}>
                <i className="ri-roadster-fill" style={styles.icon}></i>
                <h3 style={styles.text}>Find Spot</h3>
            </div>
            <div style={styles.item} onClick={() => setView("rentSpot")}>
                <i className="ri-money-rupee-circle-fill" style={styles.icon}></i>
                <h3 style={styles.text}>Rent Spot</h3>
            </div>
        </div>
    );
};

export default IconExample;

