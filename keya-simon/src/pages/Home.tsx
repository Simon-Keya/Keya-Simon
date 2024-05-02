import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import axios from 'axios';

const Home = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({ text: '', author: '' });

  useEffect(() => {
    fetchQuoteOfTheDay();
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

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-grow p-8">
        <Header />
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
            <p className="text-lg">Welcome to my blog! Here, I share my thoughts, ideas, and experiences about various topics such as art, technology, philosophy, and more.</p>
            <p className="text-lg mt-4">Feel free to explore the different categories and engage with the content by leaving comments or sharing your own insights.</p>
          </div>
          {/* Add more sections as needed */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
