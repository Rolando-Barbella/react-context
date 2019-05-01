import React from 'react';
const { Provider, Consumer } = React.createContext();

let teams = [
	{ id: '1', name: 'Yankees', league: 'American', division: 'East' },
	{ id: '2', name: 'Red Sox', league: 'American', division: 'East' },
	{ id: '3', name: 'Blue Jays', league: 'American', division: 'East' },
	{ id: '4', name: 'Rays', league: 'American', division: 'East' },
	{ id: '5', name: 'Twins', league: 'American', division: 'East' },
];

class TeamsProvider extends React.Component {
	render() {
		return (
			<Provider 
				value={{
					teams: teams,
				}}
			>
				{this.props.children}
			</Provider>
		)
	}
};

export { TeamsProvider, Consumer as TeamsConsumer };
