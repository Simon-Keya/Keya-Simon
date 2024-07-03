import express, { NextFunction, Request, Response } from 'express';
import { adminOnly, authenticate } from '../middlewares/authMiddleware';
import { IUser } from '../models/User';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  searchBlogPosts,
  updateBlogPost
} from '../services/blogService';

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

const router = express.Router();

// Middleware to protect routes
router.use(authenticate);

// Create a new blog post (admin only)
router.post('/', adminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authReq = req as AuthenticatedRequest;
    if (!authReq.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const newPost = await createBlogPost({ ...authReq.body, author: authReq.user._id });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

// Get all blog posts (public)
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getAllBlogPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

// Get a specific blog post by ID (public)
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const postId = req.params.id;
  try {
    const post = await getBlogPostById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
});

// Update a specific blog post (admin only)
router.put('/:id', adminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authReq = req as AuthenticatedRequest;
    const postId = req.params.id;
    if (!authReq.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const updatedPost = await updateBlogPost(postId, { ...authReq.body, author: authReq.user._id });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found or unauthorized update' });
    }
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});

// Delete a specific blog post (admin only)
router.delete('/:id', adminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authReq = req as AuthenticatedRequest;
    const postId = req.params.id;
    await deleteBlogPost(postId);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
});

// Search blog posts by title or content (public)
router.get('/search/:term', async (req: Request, res: Response, next: NextFunction) => {
  const searchTerm = req.params.term;
  try {
    const posts = await searchBlogPosts(searchTerm);
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

export default router;
