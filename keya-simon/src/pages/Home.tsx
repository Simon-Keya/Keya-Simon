import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/Home.css';

interface Post {
  id: number;
  title: string;
  imageUrl?: string; // Optional image URL property
}

const Home = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({ text: '', author: '' });
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]); // State for image URLs

  useEffect(() => {
    fetchQuoteOfTheDay();
    fetchLatestPosts();
    fetchImageUrls(); // Fetch image URLs concurrently
  }, []);

  const fetchQuoteOfTheDay = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
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
        'https://www.pexels.com/photo/shallow-focus-photography-of-paintbrush-102127/',
        'https://images.unsplash.com/photo-1504208434313-e8c5830f8cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdparamrefQ8fDB8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1532212096618-ca9789788bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdparamrefQ8fDB8&auto=format&fit=crop&w=800&q=60',
      ];
      setImageUrls(imageUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };
  
  return (
    <div className="home-container bg-cover bg-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="home-content max-w-4xl mx-auto">
        <div className="welcome-section text-center">
          <h1 className="title text-4xl font-bold mb-8">Welcome to My Blog</h1>
          <div className="quote-section mb-8">
            <h2 className="subtitle text-2xl font-semibold mb-4">Quote of the Day</h2>
            <blockquote className="quote italic border-l-4 border-blue-500 pl-4">
              <p className="text-lg">{quoteOfTheDay.text}</p>
              <p className="author text-sm mt-2">{quoteOfTheDay.author}</p>
            </blockquote>
          </div>
          <div className="about-section mb-8">
            <h2 className="subtitle text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-lg">
              Welcome to my blog! Here, I share my thoughts, ideas, and experiences about various topics such as art, technology, philosophy, and more.
              Feel free to explore the different categories and engage with the content by leaving comments or sharing your own insights.
              Whether you're interested in exploring new ideas or sharing your perspective, this blog is a space for open discussion and learning.
            </p>
          </div>
          <div className="latest-posts-section mb-8">
            <h2 className="subtitle text-2xl font-semibold mb-4">Latest Blog Posts</h2>
            <ul className="list-none p-0">
              {latestPosts.map((post) => (
                <li key={post.id} className="mb-2">
                  <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="image-carousel relative overflow-hidden h-64 mb-8">
            <div className="absolute inset-0 flex animate-slide">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img src={imageUrl} alt={`Blog Post ${index + 1}`} className="w-full h-full object-cover" />
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
