import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './context/EmailContext';

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
      <Root />
    </EmailProvider>
  </UserProvider>,
  document.querySelector('#root')
);
