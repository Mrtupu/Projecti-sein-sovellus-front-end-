import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCreator = ({ addGroup }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGroup = { name, description, date };
    addGroup(newGroup);
    setName('');
    setDescription('');
    setDate('');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create a New Group</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Group Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter group name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter group description"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Select a Day</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default GroupCreator;