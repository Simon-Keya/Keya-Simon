import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/self-improvement" className="text-blue-600 hover:text-blue-800">
              Self Improvement
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/psychology" className="text-blue-600 hover:text-blue-800">
              Psychology
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/philosophy" className="text-blue-600 hover:text-blue-800">
              Philosophy
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/art" className="text-blue-600 hover:text-blue-800">
              Art
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/technology" className="text-blue-600 hover:text-blue-800">
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
