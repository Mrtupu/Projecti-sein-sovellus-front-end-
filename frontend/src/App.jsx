import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GroupCreator from './pages/GroupCreator';
import GroupDetails from './pages/GroupDetails';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState('Guest');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' ? true : false;
  });

  const projects = [
    'Python Ryhmätyö',
    'Javascript Canvas API',
    'Ohjelmointi-tutkinnonosan näyttö',
    'Ohjelmistokehittäjänä toiminen näyttö',
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addGroup = (group) => {
    setGroups([...groups, { ...group, members: [] }]);
  };

  const joinGroup = (groupId) => {
    setGroups(
      groups.map((group, index) =>
        index === parseInt(groupId)
          ? { ...group, members: [...group.members, currentUser] }
          : group
      )
    );
  };

  const leaveGroup = (groupId) => {
    setGroups(
      groups.map((group, index) =>
        index === parseInt(groupId)
          ? { ...group, members: group.members.filter(member => member !== currentUser) }
          : group
      )
    );
  };

  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 p-16">
        <Routes>
          <Route path="/" element={<HomePage groups={groups} projects={projects} />} />
          <Route path="/create" element={<GroupCreator addGroup={addGroup} projects={projects} />} />
          <Route
            path="/groups/:id"
            element={<GroupDetails groups={groups} currentUser={currentUser} joinGroup={joinGroup} leaveGroup={leaveGroup} />}
          />
        </Routes>
      </main>
    </div>
    </Router>
  );
};

export default App;
