import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GroupCreator = ({ addGroup, projects }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [project, setProject] = useState('');
  const navigate = useNavigate();
  const { translations } = useLanguage(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = { name, description, date, project };
    addGroup(newGroup);

    setName('');
    setDescription('');
    setDate('');
    setProject('');

    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{translations.createGroup}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">{translations.groupName}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={translations.groupName}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{translations.description}</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={translations.description}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{translations.selectDay}</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{translations.selectProject}</label>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>
              {translations.selectProject}
            </option>
            {projects.map((proj, index) => (
              <option key={index} value={proj}>
                {proj}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {translations.submit}
        </button>
      </form>
    </div>
  );
};

export default GroupCreator;