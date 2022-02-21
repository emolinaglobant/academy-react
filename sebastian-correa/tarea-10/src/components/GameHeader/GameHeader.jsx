import React from 'react';
import { useEffect } from "react";
import './GameHeader.css';
import PropTypes from 'prop-types';

const GameHeader = (props) => {
    return (
        <section className="info-container">
            <p>Lives: {props.lives}</p>
            <p>Points: {props.points}</p>
        </section>
    );
};

GameHeader.defaultProps = {
    lives: 3,
    points: 0
};

GameHeader.propTypes = {
    lives: PropTypes.number,
    points: PropTypes.number
};

export default GameHeader;
