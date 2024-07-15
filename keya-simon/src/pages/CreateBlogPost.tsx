import React, { useState } from 'react';
import './styles/CreateBlogPost.css';

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      // Make API request to create a new blog post
      const response = await fetch('https://api.example.com/blog/posts', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Blog post created successfully');
        // Redirect to the blog post detail page after creation
        window.location.href = '/blog-post-detail';
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-1">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-3 w-full border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-1">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
