import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './context/EmailContext';
import { TeamsProvider } from './context/TeamsContext';
import { NotificationProvider } from './context/NotificationContext';

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <TeamsProvider>
          <Root />
        </TeamsProvider>
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>,
  document.querySelector('#root')
);
