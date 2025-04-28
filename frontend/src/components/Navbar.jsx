import { Link } from 'react-router-dom';
import { FaUsers, FaPlus, FaUserCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ currentUser, setCurrentUser, darkMode, toggleDarkMode }) => {
  const { translations, toggleLanguage, language } = useLanguage();

  const handleLogin = () => {
    const username = prompt(translations.login);
    if (username) {
      localStorage.setItem('currentUser', username);
      setCurrentUser(username);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser('Guest');
  };

  return (
    <nav className="bg-white text-gray-900 fixed top-0 left-0 w-full border-b border-gray-300 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <FaUsers className="text-xl" />
          <span className="text-lg font-bold">kärsimyskalapaisti</span>
        </Link>

        <div className="flex space-x-6 items-center">
          <Link to="/create" className="flex items-center space-x-1 hover:text-gray-500">
            <FaPlus />
            <span>{translations.newGroup}</span>
          </Link>
          <span>{currentUser}</span>
          {currentUser === 'Guest' ? (
            <button onClick={handleLogin} className="hover:text-gray-500">
              <FaUserCircle />
              <span>{translations.login}</span>
            </button>
          ) : (
            <button onClick={handleLogout} className="hover:text-gray-500">
              {translations.logout}
            </button>
          )}
          <button onClick={toggleLanguage} className="hover:text-gray-500">
            {language === 'en' ? 'FI' : 'EN'} 
          </button>
          <button onClick={toggleDarkMode} className="hover:text-gray-500" aria-label="Toggle dark mode">
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;