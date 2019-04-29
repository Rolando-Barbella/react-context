import React from 'react';

export default React.createContext({
    teams: [
        {id: '1', name: 'Yankees', league: 'American', division: 'East'},
        {id: '2', name: 'Red Sox', league: 'American', division: 'East'},
        {id: '3', name: 'Blue Jays', league: 'American', division: 'East'},
        {id: '4', name: 'Rays', league: 'American', division: 'East'},
        {id: '5', name: 'Twins', league: 'American', division: 'East'},
    ],
    onTeam: () => console.log('Team')
});