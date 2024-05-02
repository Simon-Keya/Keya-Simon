import React from 'react';

// Define the props interface for the BlogPost component
interface BlogPostProps {
  post: {
    type: string;
    author?: string;
    quote?: string;
    title?: string;
    imageUrl?: string;
    videoUrl?: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Blog Post</h2>
      {post.type === 'quote' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
          <p className="text-gray-700">{post.quote}</p>
        </div>
      )}
      {post.type === 'art' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <img src={post.imageUrl} alt={post.title} className="max-w-full" />
        </div>
      )}
      {post.type === 'video' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <iframe
            title={post.title}
            width="560"
            height="315"
            src={post.videoUrl}
            frameBorder="0"
            allowFullScreen
            className="max-w-full"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
