import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { EmailContext } from './context/EmailContext';

const MessageList = () => {
  const { user, age } = useContext(UserContext);
  const { loading, emails, onSelectEmail } = useContext(EmailContext);
  return (
    <div className="MessageList">
      {loading ? (
        <div className="no-messages">Loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {user.firstName} - {age} years old! 🎉
        </div>
      ) : (
        <ul>
          {emails.map(email => (
            <Email
              key={email.id}
              email={email}
              onClick={onSelectEmail}
            />
          ))}
        </ul>
      )}
    </div>
  )
};

const Email = React.memo(({ email, onClick }) => (
  <li onClick={() => onClick(email)}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
));

export default MessageList;
