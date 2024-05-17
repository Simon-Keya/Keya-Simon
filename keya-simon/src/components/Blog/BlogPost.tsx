import React from 'react';
import Post, { Posts } from './Post';

const BlogPost = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Blog Posts</h1>
      {Posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPost;