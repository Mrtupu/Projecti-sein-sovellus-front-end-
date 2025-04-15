import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const GroupDetails = ({ groups, currentUser, joinGroup }) => {
  const { id } = useParams();
  const group = groups[id];
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, { user: currentUser, text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{group.name}</h1>
      <p>{group.description}</p>
      <p className="text-sm text-gray-500">Date: {group.date}</p>

      <button
        onClick={() => joinGroup(id)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Join Group
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Chatroom</h2>
        <div className="p-4 bg-white rounded shadow mb-4 h-64 overflow-y-auto">
          {chat.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Type a message"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Members</h2>
        <ul className="list-disc pl-5">
          {group.members?.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupDetails;