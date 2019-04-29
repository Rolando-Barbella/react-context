import React from 'react';

const TeamList = ({ teams }) => {
	return(
		<div>
			{teams.map(team => (
					<p key={team.id}>{team.name}</p>)
				)
			}
		</div>
	)
}

export default TeamList;