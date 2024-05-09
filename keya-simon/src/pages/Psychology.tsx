import React, { useEffect, useState } from 'react';
import './styles/Psychology.css'; // Import the CSS file

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Psychology = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from a simulated or real API for psychology posts
    const psychologyPosts: Post[] = [
      // Replace with actual data from your API
      {
        title: 'The Power of the Subconscious Mind',
        type: 'writing',
        content: 'The subconscious mind is a vast reservoir of thoughts, memories, and experiences that influence our behavior and emotions.',
      },
      {
        title: 'Stress Management Techniques',
        type: 'writing',
        content: 'Stress is a normal part of life, but chronic stress can have negative impacts on our health and well-being. Learn about effective techniques to manage stress.',
      },
      {
        title: 'Carl Jung',
        type: 'quote',
        quote: 'Knowing your own darkness is the best method for dealing with the darkness of other people.',
      },
      {
        title: 'The Happiness Hypothesis',
        type: 'writing',
        content: 'The Happiness Hypothesis explores the science of happiness and how to cultivate greater joy in your life.',
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        type: 'writing',
        content: 'CBT is a form of therapy that helps individuals identify and change negative thought patterns and behaviors that contribute to emotional distress.',
      },
      {
        title: 'Abraham Maslow',
        type: 'quote',
        quote: 'One must first accept oneself in order to love oneself.',
      },
    ];

    // Alternatively, uncomment the following lines to fetch data from an API
    // axios.get<Post[]>('https://api.example.com/psychology-posts')
    //   .then(response => {
    //     setPosts(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching psychology posts:', error);
    //   });

    setPosts(psychologyPosts); // Use simulated or fetched data
  }, []);

  return (
    <div className="psychology">
      <h1>Psychology Category</h1>
      <div className="psychology-container">
        {posts.map((post, index) => (
          <div key={index} className="psychology-post">
            <h2>{post.title}</h2>
            {post.type === 'writing' && <p className="post-content">{post.content}</p>}
            {post.type === 'quote' && (
              <blockquote className="post-quote">
                <p>{post.quote}</p>
              </blockquote>
            )}
            {post.type === 'photo' && <img src={post.imageUrl} alt={post.title} />}
            {/* Render other types of content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Psychology;
