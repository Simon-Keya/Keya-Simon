import React, { useEffect, useState } from 'react';
import './styles/Philosophy.css'; // Import the CSS file

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Philosophy = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Replace with actual data from your API (or use simulated data)
    const philosophyPosts: Post[] = [
      {
        title: 'The Allegory of the Cave',
        type: 'writing',
        content: 'Plato\'s Allegory of the Cave is an allegory presented by the Greek philosopher Plato in his work Republic. It is one of the best-known passages in all of philosophy.',
        imageUrl: 'https://example.com/images/allegory-of-the-cave.jpg', // Replace with your image URL
      },
      {
        title: 'Socrates',
        type: 'quote',
        quote: 'The unexamined life is not worth living.',
      },
      {
        title: 'Existentialism',
        type: 'writing',
        content: 'Existentialism is a form of philosophy that emphasizes the existence of the individual person as a free and self-determining agent.',
        imageUrl: 'https://example.com/images/existentialism.jpg', // Replace with your image URL
      },
      {
        title: 'Confucius',
        type: 'quote',
        quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
      },
      {
        title: 'Stoicism',
        type: 'writing',
        content: 'Stoicism is a school of Hellenistic philosophy founded by Zeno of Citium in Athens in the early 3rd century BC. It is a philosophy of personal ethics focused on the development of virtue and the estimation of what is within our control.',
        imageUrl: 'https://example.com/images/stoicism.jpg', // Replace with your image URL
      },
    ];

    // Alternatively, uncomment the following lines to fetch data from an API
    // axios.get<Post[]>('https://api.example.com/philosophy-posts')
    //   .then(response => {
    //     setPosts(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching philosophy posts:', error);
    //   });

    setPosts(philosophyPosts); // Use simulated or fetched data
  }, []);

  return (
    <div className="philosophy">
      <h1>Philosophy</h1>
      <div className="philosophy-container">
        {posts.map((post, index) => (
          <div key={index} className="philosophy-post">
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

export default Philosophy;
