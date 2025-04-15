import { Link } from 'react-router-dom';
import { FaUsers, FaPlus, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ currentUser, setCurrentUser }) => {
  const handleLogin = () => {
    const username = prompt('Enter your username:');
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
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <FaUsers className="text-xl" />
          <span className="text-lg font-bold">kärsimyskalapaisti</span>
        </Link>

        <div className="flex space-x-6 items-center">
          <Link to="/create" className="flex items-center space-x-1 hover:text-gray-300">
            <FaPlus />
            <span>Uusi ryhmä</span>
          </Link>
          <span>{currentUser}</span>
          {currentUser === 'Guest' ? (
            <button onClick={handleLogin} className="hover:text-gray-300">
              <FaUserCircle />
              <span>Login</span>
            </button>
          ) : (
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;