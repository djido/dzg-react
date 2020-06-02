import React from 'react';
import Player from './Player';

export default function PlayerList({players}) {
    if(players.length === 0){
        return <div className="empty-search">
            <h3>Nije pronađeno.</h3>
        </div>
    }
    return (
        <section className="playerslist">
            <div className="playerslist-center">
                {
                    players.map(item => {
                        return <Player key={item.id} player={item} />
                    })
                }
            </div>
        </section>
    );
}
