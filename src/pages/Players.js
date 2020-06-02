import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import PlayersContainer from '../components/PlayersContainer';

const Players = () => {
    return (
        <>
            <Hero hero="playersHero">
                <Banner title="Kupuj po igraču">
                    <Link to="/" className="btn-primary">
                        Nazad na početnu
                    </Link>
                </Banner>
            </Hero>
            <PlayersContainer />
        </>
    );
}

export default Players;