import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageViewer from './MessageViewer';
import { EmailConsumer } from './context/EmailContext';
import { TeamsConsumer } from './context/TeamsContext';
// console.log(EmailConsumer)
// console.log(TeamsConsumer)
const MainPage = () => (
  <TeamsConsumer>
    {({ teams }) =>
      <EmailConsumer>
        {({ currentEmail }) => 
          <main>
            <Header/>
              {currentEmail ? <MessageViewer/> : <MessageList/> }
              {teams[0].id}
            <MessageList />
          </main>
        }
      </EmailConsumer>
    }
  </TeamsConsumer>
);

export default MainPage;
