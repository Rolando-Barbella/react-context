import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './context/EmailContext';
import { TeamsProvider } from './context/TeamsContext';

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <UserProvider>
    <EmailProvider>
      <TeamsProvider>
        <Root />
      </TeamsProvider>
    </EmailProvider>
  </UserProvider>,
  document.querySelector('#root')
);
