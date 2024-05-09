import React, { useEffect, useState } from 'react';
import './styles/Technology.css'; // Import the CSS file

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Technology = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Replace with actual data from your API (or use simulated data)
    const technologyPosts: Post[] = [
      {
        title: 'The Rise of Artificial Intelligence',
        type: 'writing',
        content: 'Artificial intelligence (AI) is rapidly transforming our world, from the way we work to the way we live. This post explores the current state of AI and its potential impact on the future.',
        imageUrl: 'https://example.com/images/ai.jpg', // Replace with your image URL
      },
      {
        title: 'Elon Musk',
        type: 'quote',
        quote: 'The future of transportation is electric.',
      },
      {
        title: 'Cybersecurity in the Digital Age',
        type: 'writing',
        content: 'Cybersecurity is the practice of protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. As our reliance on technology grows, so does the importance of cybersecurity.',
        imageUrl: 'https://example.com/images/cybersecurity.jpg', // Replace with your image URL
      },
      {
        title: 'Steve Jobs',
        type: 'quote',
        quote: 'Innovation distinguishes between a leader and a follower.',
      },
      {
        title: 'The Internet of Things (IoT)',
        type: 'writing',
        content: 'The Internet of Things (IoT) refers to the interconnection of physical devices – embedded with sensors, software, and other technologies – that allows them to collect and exchange data. This technology has the potential to revolutionize many aspects of our lives.',
        imageUrl: 'https://example.com/images/iot.jpg', // Replace with your image URL
      },
    ];

    // Alternatively, uncomment the following lines to fetch data from an API
    // axios.get<Post[]>('https://api.example.com/technology-posts')
    //   .then(response => {
    //     setPosts(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching technology posts:', error);
    //   });

    setPosts(technologyPosts); // Use simulated or fetched data
  }, []);

  return (
    <div className="technology">
      <h1>Technology</h1>
      <div className="technology-container">
        {posts.map((post, index) => (
          <div key={index} className="technology-post">
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

export default Technology;
