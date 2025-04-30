import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GroupDetails = ({ groups, currentUser, joinGroup, leaveGroup }) => {
  const { id } = useParams();
  const group = groups[id];
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [showJoinConfirmation, setShowJoinConfirmation] = useState(false);
  const [showLeaveConfirmation, setShowLeaveConfirmation] = useState(false);
  const { translations } = useLanguage();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, { user: currentUser, text: message }]);
      setMessage('');
    }
  };

  const handleJoinGroup = () => {
    joinGroup(id);
    setShowJoinConfirmation(true);
    setTimeout(() => setShowJoinConfirmation(false), 3000);
  };

  const handleLeaveGroup = () => {
    leaveGroup(id);
    setShowLeaveConfirmation(true);
    setTimeout(() => setShowLeaveConfirmation(false), 3000);
  };

  const isMember = group.members.includes(currentUser);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-card rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-primary">{group.name}</h1>
      <p className="text-primary">{group.description}</p>
      <p className="text-secondary text-sm">{translations.date}: {group.date}</p>

      {!isMember ? (
        <button
          onClick={handleJoinGroup}
          className="mt-4 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded"
        >
          {translations.joinGroup}
        </button>
      ) : (
        <>
          {showJoinConfirmation && (
            <p className="mt-4 text-success font-bold">
              {translations.joinedConfirmation || 'You have joined the group!'}
            </p>
          )}
          <button
            onClick={handleLeaveGroup}
            className="mt-4 bg-danger hover:bg-danger-hover text-white px-4 py-2 rounded"
          >
            {translations.leaveGroup || 'Leave Group'}
          </button>
          {showLeaveConfirmation && (
            <p className="mt-4 text-danger font-bold">
              {translations.leftConfirmation || 'You have left the group.'}
            </p>
          )}
        </>
      )}

      {isMember && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2 text-primary">{translations.chatroom}</h2>
          <div className="p-4 bg-chatbox rounded shadow mb-4 h-64 overflow-y-auto">
            {chat.map((msg, index) => (
              <div key={index} className="mb-2 text-primary">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 border border-default rounded bg-input text-primary"
              placeholder={translations.typeMessage}
            />
            <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded">
              {translations.sendMessage}
            </button>
          </form>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2 text-primary">{translations.members}</h2>
        <ul className="list-disc pl-5 text-primary">
          {group.members?.map((member, index) => (
            <li key={index} className="bg-group-list-item rounded p-1 mb-1">{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupDetails;
