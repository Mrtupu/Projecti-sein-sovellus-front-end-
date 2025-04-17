import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
      welcome: 'Welcome to the Group Finder!',
      filterByProject: 'Filter by Project',
      allProjects: 'All Projects',
      noGroups: 'No groups available for the selected project.',
      createGroup: 'Create a New Group',
      groupName: 'Group Name',
      description: 'Description',
      selectDay: 'Select a Day',
      selectProject: 'Select Project',
      submit: 'Create Group',
      joinGroup: 'Join Group',
      chatroom: 'Chatroom',
      sendMessage: 'Send Message',
      members: 'Members',
      login: 'Login',
      logout: 'Logout',
      newGroup: 'New Group',
      joinedConfirmation: 'You have joined the group!',
      typeMessage: 'Type a message',
      date: 'Date', 
      project: 'Project', 
    },
    fi: {
      welcome: 'Tervetuloa ryhmähaku sivulle!',
      filterByProject: 'Suodata projektin mukaan',
      allProjects: 'Kaikki projektit',
      noGroups: 'Valitulle projektille ei ole ryhmiä.',
      createGroup: 'Luo uusi ryhmä',
      groupName: 'Ryhmän nimi',
      description: 'Kuvaus',
      selectDay: 'Valitse päivä',
      selectProject: 'Valitse projekti',
      submit: 'Luo ryhmä',
      joinGroup: 'Liity ryhmään',
      chatroom: 'Keskusteluhuone',
      sendMessage: 'Lähetä viesti',
      members: 'Jäsenet',
      login: 'Kirjaudu sisään',
      logout: 'Kirjaudu ulos',
      newGroup: 'Uusi ryhmä',
      joinedConfirmation: 'Olet liittynyt ryhmään!',
      typeMessage: 'Kirjoita viesti',
      date: 'Päivämäärä', 
      project: 'Projekti',
    },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);