import React from 'react';
import { Link } from 'react-router-dom';

const GroupsPage = ({ groups }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Existing Groups</h1>
      {groups.length === 0 ? (
        <p>No groups created yet.</p>
      ) : (
        <ul className="space-y-4">
          {groups.map((group, index) => (
            <li key={index} className="p-4 bg-white rounded shadow">
              <Link to={`/groups/${index}`} className="text-xl font-bold text-blue-500 hover:underline">
                {group.name}
              </Link>
              <p>{group.description}</p>
              <p className="text-sm text-gray-500">Date: {group.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupsPage;