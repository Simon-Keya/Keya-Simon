import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout/Header.css';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title (Left corner) */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8">
            <img src="/Logo.png" alt="Logo" className="h-8 mr-2" />
            <span className="font-bold text-lg">Simon Keya</span>
          </Link>
        </div>

        {/* Space */}
        <div className="flex-grow"></div>

        {/* Navigation Links (Right corner) */}
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </nav>

        {/* Login and Sign Up Links (Right corner) */}
        <nav className="space-x-4">
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
