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
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-primary">{translations.createGroup}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-primary">{translations.groupName}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-default rounded bg-input text-primary"
            placeholder={translations.groupName}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-primary">{translations.description}</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-default rounded bg-input text-primary"
            placeholder={translations.description}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-primary">{translations.selectDay}</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-default rounded bg-input text-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-primary">{translations.selectProject}</label>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3 py-2 border border-default rounded bg-input text-primary"
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
          className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded"
        >
          {translations.submit}
        </button>
      </form>
    </div>
  );
};

export default GroupCreator;
