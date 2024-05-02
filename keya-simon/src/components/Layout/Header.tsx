import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Simon Keya's Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
