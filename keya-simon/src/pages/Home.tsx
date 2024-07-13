import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

interface Post {
  id: number;
  title: string;
  imageUrl?: string;
}

const Home = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({ text: '', author: '' });
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchQuoteOfTheDay();
    fetchLatestPosts();
    fetchImageUrls();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [imageUrls]);

  const fetchQuoteOfTheDay = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      const { q: text, a: author } = response.data[0];
      setQuoteOfTheDay({ text, author });
    } catch (error) {
      console.error('Error fetching quote of the day:', error);
    }
  };

  const fetchLatestPosts = async () => {
    try {
      const response = await axios.get<Post[]>('https://api.example.com/posts/latest?limit=5');
      setLatestPosts(response.data);
    } catch (error) {
      console.error('Error fetching latest posts:', error);
    }
  };

  const fetchImageUrls = async () => {
    try {
      const imageUrls = [
        '../../assets/technology.jpg',
        '../../assets/psychology.jpg',
        '../../assets/art.jpg',
        '../../assets/self-improvement.jpg',
        '../../assets/philosophy.jpg',
      ];
      setImageUrls(imageUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace with your API endpoint to handle newsletter signup
      await axios.post('https://api.example.com/newsletter/signup', { email });
      setSubmissionMessage('Thank you for signing up!');
    } catch (error) {
      console.error('Error signing up for newsletter:', error);
      setSubmissionMessage('Failed to sign up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const imageTitles = ["Technology", "Psychology", "Art", "Self Improvement", "Philosophy"];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="welcome-section">
          <h1 className="title">Welcome to My Blog</h1>
          <div className="quote-section">
            <h2 className="subtitle">Quote of the Day</h2>
            <blockquote className="quote">
              <p>{quoteOfTheDay.text}</p>
              <p className="author">{quoteOfTheDay.author}</p>
            </blockquote>
          </div>
          <div className="about-section">
            <h2 className="subtitle">About Me</h2>
            <p>
              Welcome to my blog! Here, I share my thoughts, ideas, and experiences about various topics such as art, technology, philosophy, and more.
              Feel free to explore the different categories and engage with the content by leaving comments or sharing your own insights.
              Whether you're interested in exploring new ideas or sharing your perspective, this blog is a space for open discussion and learning.
            </p>
          </div>
          <div className="owner-section">
            <h2 className="subtitle">About the Author</h2>
            <p>
              Hi, I’m Simon Keya. I am a software developer and artist. I write life advice that is science-based, pragmatic, and non-bullshitty—a.k.a., a free perspective that doesn’t suck.
              How you process what I share here is based on your own perspective. I also read about psychology and am familiar with several psychological books. Read on and decide for yourself.
            </p>
            <div className="flex flex-row justify-start mt-4">
              <Link to="/blog" className="button-dark-purple button-link">BLOG</Link>
              <a href="https://simon-keya.vercel.app" className="button-dark-purple button-link">TECH WEBSITE</a>
              <a href="https://keyart.vercel.app" className="button-dark-purple">ART WEBSITE</a>
            </div>
          </div>
          <div className="latest-posts-section">
            <h2 className="subtitle">Topic Posts</h2>
            <ul>
              {latestPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`} className="post-link">{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="image-carousel">
            <div className="relative">
              <img
                src={imageUrls[currentImageIndex]}
                alt={`Blog Post ${currentImageIndex + 1}`}
                className="carousel-image"
              />
              <div className="image-title">{imageTitles[currentImageIndex]}</div>
            </div>
          </div>
          <div className="newsletter-section">
            <h2 className="subtitle">5 MINUTES EACH WEEK THAT MIGHT CHANGE YOUR LIFE</h2>
            <p>
              Enter your email address below to sign up for my free newsletter, Your Next Breakthrough. Each week, you’ll receive a few prompts and exercises designed to create your next breakthrough. No fluff, no filler, no BS. Just five minutes each week that might change your life.
            </p>
            <form onSubmit={handleEmailSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={handleEmailChange}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button" disabled={isSubmitting}>
                SIGN UP
              </button>
            </form>
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
            <p>
              Your information is protected and I never spam, ever. You can view my <a href="/privacy-policy" className="privacy-link">privacy policy here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;