import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../../services/adminApi';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostManagement: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Initialize with an empty array of type Post[]

  useEffect(() => {
    // Fetch posts when component mounts
    getPosts().then((data) => setPosts(data));
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  // Function to delete a post
  const handleDelete = async (postId: number) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post.id !== postId)); // Update state after deleting
  };

  return (
    <div>
      <h2>Post Management</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostManagement;
