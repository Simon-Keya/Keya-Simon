import React, { useEffect, useState } from 'react';
import './styles/SelfImprovement.css';

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
    // Simulated data for demonstration
    const selfImprovementPosts: Post[] = [
      {
        title: 'The Power of Habit',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'The 7 Habits of Highly Effective People',
        type: 'writing',
        content: 'The 7 Habits of Highly Effective People is a self-help book written by Stephen Covey. It has sold more than 25 million copies in 40 languages since first publication in 1989.',
      },
      {
        title: 'Confucius',
        type: 'quote',
        quote: 'It does not matter how slowly you go as long as you do not stop.',
      },
      {
        title: 'The Miracle Morning',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Mindset: The New Psychology of Success',
        type: 'writing',
        content: 'Mindset: The New Psychology of Success is a book by Carol S. Dweck (**corrected typo**). In the book, Dweck argues that the view you adopt for yourself profoundly affects the way you lead your life.',
      },
      {
        title: 'Jim Rohn',
        type: 'quote',
        quote: 'Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.',
      },
    ];

    setPosts(selfImprovementPosts);
  }, []);

  return (
    <div className="self-improvement">
      <h1>Self Improvement</h1>
      <div className="self-improvement-container">
        {posts.map((post, index) => (
          <div key={index} className="self-improvement-post">
            <h2>{post.title}</h2>
            {post.type === 'writing' && <p className="post-content">{post.content}</p>}
            {post.type === 'quote' && (
              <blockquote className="post-quote">
                <p>{post.quote}</p>
              </blockquote>
            )}
            {post.type === 'photo' && <img src={post.imageUrl} alt={post.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfImprovement;
