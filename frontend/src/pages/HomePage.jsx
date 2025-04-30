import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HomePage = ({ groups, projects }) => {
  const { translations } = useLanguage();
  const [selectedProject, setSelectedProject] = useState('');

  const filteredGroups = selectedProject
    ? groups.filter((group) => group.project === selectedProject)
    : groups;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-card rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-primary">{translations.welcome}</h1>
      <div className="mb-4 bg-list p-4 rounded">
        <label className="block text-sm font-medium mb-1 text-primary">{translations.filterByProject}</label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="w-full px-3 py-2 border border-default rounded bg-input text-primary"
        >
          <option value="">{translations.allProjects}</option>
          {projects.map((proj, index) => (
            <option key={index} value={proj}>
              {proj}
            </option>
          ))}
        </select>
      </div>
          {filteredGroups.length === 0 ? (
        <p className="text-primary">{translations.noGroups}</p>
      ) : (
        <ul className="space-y-4 bg-groups-list p-4 rounded">
          {filteredGroups.map((group, index) => (
            <li key={index} className="p-4 rounded shadow bg-group-list-item">
              <Link to={`/groups/${index}`} className="text-xl font-bold text-primary hover:underline">
                {group.name}
              </Link>
              <p className="text-primary">{group.description}</p>
              <p className="text-secondary text-sm">
                {translations.date}: {group.date} 
              </p>
              <p className="text-secondary text-sm">
                {translations.project}: {group.project} 
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
