import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout/Header.css';

const Header = () => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto ">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center text-white no-underline">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl">Simon Keya</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex">
          <Link to="/" className="px-4 py-2 hover:text-gray-300">Home</Link>
          <Link to="/blog" className="px-4 py-2 hover:text-gray-300">Blog</Link>

          {/* Account Dropdown */}
          <div className="relative px-4 py-2">
            <button onMouseEnter={toggleAccountDropdown} onMouseLeave={toggleAccountDropdown}>
              Account
            </button>
            {isAccountDropdownOpen && (
              <div className="origin-top-right absolute right- mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative px-4 py-2">
            <button onMouseEnter={toggleCategoriesDropdown} onMouseLeave={toggleCategoriesDropdown}>
              Categories
            </button>
            {isCategoriesDropdownOpen && (
              <div className="origin-top-right absolute right- mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                {/* Map over your categories if they are dynamic otherwise list them as below */}
                <Link to="/Art" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Art</Link>
                <Link to="/Psychology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Psychology</Link>
                <Link to="/Technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technology</Link>
                <Link to="/Philosophy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Philosophy</Link>
                <Link to="/self improvement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Self Improvement</Link>
                {/* ... Other categories */}
              </div>
            )}
          </div>

          {/* Authentication Links */}
          <Link to="/login" className="px-4 py-2 hover:text-gray-300">Login</Link>
          <Link to="/register" className="px-4 py-2 hover:text-gray-300">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;