import React, { useEffect, useState } from 'react';
import './styles/Art.css';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Art = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulated data for demonstration
    const artPosts: Post[] = [
      {
        title: 'The Starry Night',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Artistic Expression',
        type: 'writing',
        content: 'Art is the expression of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
      },
      {
        title: 'Pablo Picasso',
        type: 'quote',
        quote: 'Art washes away from the soul the dust of everyday life.',
      },
      // Add more sample posts here
      {
        title: 'The Persistence of Memory',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Artistic Creativity',
        type: 'writing',
        content: 'Creativity is intelligence having fun.',
      },
      {
        title: 'Vincent van Gogh',
        type: 'quote',
        quote: 'I am seeking, I am striving, I am in it with all my heart.',
      },
    ];

    setPosts(artPosts);
  }, []);

  return (
    <div>
      <h1>Art</h1>
      <div className="art-container">
        {posts.map((post, index) => (
          <div key={index} className="art-post">
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

export default Art;
