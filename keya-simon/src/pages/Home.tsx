import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Home.css';
import Sidebar from '../components/Layout/Sidebar';

interface Post {
  id: number;
  title: string;
}

const Home = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({ text: '', author: '' });
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchQuoteOfTheDay();
    fetchLatestPosts();
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

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-grow p-8">
        <div className="mt-8">
          <h1 className="text-3xl font-semibold mb-4">Welcome to My Blog</h1>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Quote of the Day</h2>
            <blockquote className="italic border-l-4 border-blue-500 pl-4">
              <p className="text-lg">{quoteOfTheDay.text}</p>
              <p className="text-sm mt-2">{quoteOfTheDay.author}</p>
            </blockquote>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-lg">
              Welcome to my blog! Here, I share my thoughts, ideas, and experiences about various topics such as art, technology, philosophy, and more.
              Feel free to explore the different categories and engage with the content by leaving comments or sharing your own insights.
              Whether you're interested in exploring new ideas or sharing your perspective, this blog is a space for open discussion and learning.
            </p>
          </div>
          {/* Latest Blog Posts Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>
            <ul>
              {latestPosts.map((post) => (
                <li key={post.id}>
                  <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
