import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout/Header.css';

const Header = () => {
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const categoriesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node) &&
      categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target as Node)
    ) {
      setIsResourcesDropdownOpen(false);
      setIsCategoriesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/logo.png" alt="Logo" />
          <span>Simon Keya</span>
        </Link>

        <nav className="header-nav">
          <div className="center-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <div className="dropdown-menu" ref={categoriesDropdownRef}>
              <button
                className="dropdown-button"
                onClick={toggleCategoriesDropdown}
              >
                Categories
              </button>
              {isCategoriesDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/art">Art</Link>
                  <Link to="/psychology">Psychology</Link>
                  <Link to="/technology">Technology</Link>
                  <Link to="/philosophy">Philosophy</Link>
                  <Link to="/self-improvement">Self Improvement</Link>
                </div>
              )}
            </div>
            <div className="dropdown-menu" ref={resourcesDropdownRef}>
              <button
                className="dropdown-button"
                onClick={toggleResourcesDropdown}
              >
                Resources
              </button>
              {isResourcesDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/books">Books</Link>
                  <Link to="/news">News</Link>
                  <Link to="/tutorials">Tutorials</Link>
                  <Link to="/support">Support</Link>
                </div>
              )}
            </div>
          </div>
          <div className="auth-links">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/register" className="signup-button">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
