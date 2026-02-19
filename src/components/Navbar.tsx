import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark' : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link to="/home" className="text-3xl font-bold bg-gradient-to-r from-netflix via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CineFlix
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/browse" className="hover:text-gray-300 transition">Browse</Link>
            <Link to="/my-list" className="hover:text-gray-300 transition">My List</Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-netflix w-48 md:w-64"
            />
          </form>

          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2"
            >
              <img
                src={user?.avatar}
                alt="Profile"
                className="w-8 h-8 rounded"
              />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 glass-dark rounded-lg py-2">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 transition"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
