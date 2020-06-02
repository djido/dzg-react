import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Player({ player }) {
    const { playerName, shirtNumber, images } = player;
    return (
        <article className="player">
            <Link to="/artikli/domaci-dres">
                <div className="img-container">
                    <img src={images[0]} alt={playerName} />
                </div>
                </Link>

                <p className="player-info player-num">{shirtNumber}</p>
                <p className="player-info">{playerName}</p>
        </article>
    );
}

Player.propTypes = {
    player: PropTypes.shape({
        playerName: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        shirtNumber: PropTypes.number.isRequired
    })
}
