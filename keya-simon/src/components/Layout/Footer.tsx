import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Layout/Footer.css';

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {SITEMAP.map(({ title, links }, index) => (
            <div key={index} className="footer-column">
              <h5>{title}</h5>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-social-icons">
          <button onClick={() => window.open('https://twitter.com')} aria-label="Twitter">
            <FaTwitter className="footer-icon" />
          </button>
          <button onClick={() => window.open('https://instagram.com')} aria-label="Instagram">
            <FaInstagram className="footer-icon" />
          </button>
          <button onClick={() => window.open('https://linkedin.com')} aria-label="LinkedIn">
            <FaLinkedin className="footer-icon" />
          </button>
          <button onClick={() => window.open('https://github.com')} aria-label="GitHub">
            <FaGithub className="footer-icon" />
          </button>
          <button onClick={() => window.open('https://facebook.com')} aria-label="Facebook">
            <FaFacebook className="footer-icon" />
          </button>
        </div>
        <div className="footer-legal">
          <button onClick={() => window.open('/privacytermspolicy')} aria-label="Privacy Policy">
            Privacy Policy
          </button>
          <button onClick={() => window.open('/termsandconditions')} aria-label="Terms & Conditions">
            Terms & Conditions
          </button>
        </div>
        <div className="footer-copy">
          <p>&copy; {currentYear} Keya Simon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
