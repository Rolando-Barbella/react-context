import React, { Component } from 'react';
import { UserConsumer } from './UserContext';
import TeamsContext from './context/TeamsContext';
import TeamList from './components/TeamList';

class TeamsList extends Component {
  static contextType = TeamsContext;
  
  render() {
    const { teams, onTeam } = this.context;
    return (
      <>
        <UserConsumer>
          {(user) =>
            <div className="MessageList">
              <div className="no-messages">
                Your mailbox iss empty, {user.firstName}! 🎉
              </div>
            </div>
          }
        </UserConsumer>
        <div onClick={onTeam} style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TeamList teams={teams} />
        </div>
      </>
    );
  }
};

export default TeamsList;
