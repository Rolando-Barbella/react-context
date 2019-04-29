import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageViewer from './MessageViewer';
import { EmailConsumer } from './context/EmailContext';
import TeamsList from './TeamsList';

const MainPage = () => (
  <EmailConsumer>
    {({ currentEmail }) => 
      <main>
        <Header/>
          {currentEmail ? <MessageViewer/> : <MessageList/> }
        <MessageList />
      </main>
    }
  </EmailConsumer>
);

export default MainPage;
