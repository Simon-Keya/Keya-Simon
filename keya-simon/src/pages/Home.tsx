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

  useEffect(() => {
    fetchQuoteOfTheDay();
    fetchLatestPosts();
    fetchImageUrls();
  }, []);

  const fetchQuoteOfTheDay = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      const { content, author } = response.data;
      setQuoteOfTheDay({ text: content, author });
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
              <Link to="/blog" className="mr-4 mb-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900">BLOG</Link>
              <a href="https://simon-keya.vercel.app" className="mr-4 mb-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900">TECH WEBSITE</a>
              <a href="https://keyart.vercel.app" className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900">ART WEBSITE</a>
            </div>
          </div>
          <div className="latest-posts-section">
            <h2 className="subtitle">Latest Blog Posts</h2>
            <ul>
              {latestPosts.map((post) => (
                <li key={post.id}>
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="image-carousel">
            <div className="animate-slide">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="relative">
                  <img src={imageUrl} alt={`Blog Post ${index + 1}`} />
                  <div className="image-title">{imageTitles[index]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
