import React from 'react';
import PlayersFilter from './PlayersFilter';
import PlayerList from './PlayerList';
import { withDzgConsumer } from '../context';
import Loading from './Loading';

function PlayersContainer({ context }) {
    const { loading, sortedPlayers, players } = context;

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <PlayersFilter players={players} />
            <PlayerList players={sortedPlayers} />
        </>
    );
}

export default withDzgConsumer(PlayersContainer);
