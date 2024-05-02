import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const SelfImprovement = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from online API for self-improvement category
    axios.get<Post[]>('https://api.example.com/self-improvement-posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching self-improvement posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Self Improvement Category</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            {post.type === 'writing' && <p>{post.content}</p>}
            {post.type === 'quote' && <blockquote>{post.quote}</blockquote>}
            {post.type === 'photo' && <img src={post.imageUrl} alt={post.title} />}
            {/* Render other types of content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfImprovement;
