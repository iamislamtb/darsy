import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function UserMenu() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center ${user?.avatar ? 'hidden' : 'flex'}`}>
            <span className="text-primary-700 font-medium text-sm">
              {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
            </span>
          </div>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 ring-1 ring-black/5">
          <div className="px-4 py-3 border-b border-neutral-100">
            <p className="text-sm font-medium text-neutral-900">{user?.name}</p>
            <p className="text-xs text-neutral-500 truncate">{user?.email}</p>
          </div>
          <Link
            to="/dashboard"
            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/profile"
            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile Settings
          </Link>
          <div className="border-t border-neutral-100 my-1"></div>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
