import { Request, Response } from 'express';
import { IUser } from '../models/User'; // Assuming IUser interface is defined
import {
    createBlogPost,
    deleteBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    searchBlogPosts,
    updateBlogPost,
} from '../services/blogService';

// Create a new blog post
export const createPost = async (req: Request & { user?: IUser }, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return; // Return after sending response
    }
    const newPost = await createBlogPost({ ...req.body, author: req.user._id });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all blog posts
export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await getAllBlogPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a specific blog post by ID
export const getPostById = async (req: Request, res: Response): Promise<void> => {
  const postId = req.params.id;
  try {
    const post = await getBlogPostById(postId);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return; // Return after sending response
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a specific blog post
export const updatePost = async (req: Request & { user?: IUser }, res: Response): Promise<void> => {
  const postId = req.params.id;
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return; // Return after sending response
    }
    const updatedPost = await updateBlogPost(postId, { ...req.body, author: req.user._id });
    if (!updatedPost) {
      res.status(404).json({ message: 'Post not found or unauthorized update' });
      return; // Return after sending response
    }
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a specific blog post
export const deletePost = async (req: Request, res: Response): Promise<void> => {
  const postId = req.params.id;
  try {
    await deleteBlogPost(postId);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Search blog posts by title or content
export const searchPosts = async (req: Request, res: Response): Promise<void> => {
  const searchTerm = req.params.term;
  try {
    const posts = await searchBlogPosts(searchTerm);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
