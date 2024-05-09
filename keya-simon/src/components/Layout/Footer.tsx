import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Layout/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <button onClick={() => window.open('https://twitter.com')} className="text-white focus:outline-none">
            <FaTwitter className="h-6 w-6 fill-current" />
          </button>
          <button onClick={() => window.open('https://instagram.com')} className="text-white focus:outline-none">
            <FaInstagram className="h-6 w-6 fill-current" />
          </button>
          <button onClick={() => window.open('https://linkedin.com')} className="text-white focus:outline-none">
            <FaLinkedin className="h-6 w-6 fill-current" />
          </button>
        </div>
        {/* Privacy Terms and Policy */}
        <div className="flex items-center space-x-4">
          <button onClick={() => window.open('/privacytermspolicy')} className="text-sm text-white hover:underline focus:outline-none">
            Privacy Policy
          </button>
          <button onClick={() => window.open('/privacytermspolicy')} className="text-sm text-white hover:underline focus:outline-none">
            Terms & Conditions
          </button>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Keya Simon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
