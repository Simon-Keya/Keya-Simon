import React from 'react';

const BlogPost = () => {
  const posts = [
    {
      type: 'picture',
      title: 'Beautiful Landscape',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      type: 'quote',
      author: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="mb-4">
          {post.type === 'picture' ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-2">Quote by {post.author}</h3>
              <p className="italic text-gray-700">"{post.quote}"</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
