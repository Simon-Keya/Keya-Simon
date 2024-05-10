import React, { useState, useEffect } from 'react';
import './styles/BlogPostDetail.css'

const BlogPostDetail = () => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Fetch the blog post detail from the API
    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else {
          console.error('Failed to fetch blog post');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
      {post.image && (
        <div className="mb-4">
          <img src={post.image} alt={post.title} className="rounded-md" />
        </div>
      )}
      <p className="text-gray-700 mb-4">{post.body}</p>
      <div className="flex items-center">
        <span className="text-gray-600 mr-2">Author: {post.author}</span>
        <span className="text-gray-600">Published on: {post.publishedDate}</span>
      </div>
    </div>
  );
};

export default BlogPostDetail;