import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ groups, projects }) => {
  const [selectedProject, setSelectedProject] = useState('');

  const filteredGroups = selectedProject
    ? groups.filter((group) => group.project === selectedProject)
    : groups;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Tervetuloa ryhmähaku sivulle!</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Filter by Project</label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">All Projects</option>
          {projects.map((proj, index) => (
            <option key={index} value={proj}>
              {proj}
            </option>
          ))}
        </select>
      </div>
      {filteredGroups.length === 0 ? (
        <p>No groups available for the selected project.</p>
      ) : (
        <ul className="space-y-4">
          {filteredGroups.map((group, index) => (
            <li key={index} className="p-4 bg-white rounded shadow">
              <Link to={`/groups/${index}`} className="text-xl font-bold text-blue-500 hover:underline">
                {group.name}
              </Link>
              <p>{group.description}</p>
              <p className="text-sm text-gray-500">Date: {group.date}</p>
              <p className="text-sm text-gray-500">Project: {group.project}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;