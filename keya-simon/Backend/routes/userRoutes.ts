import { Router } from 'express';
import {
  deleteUser,
  getUser,
  searchUser,
  updateUser
} from '../controllers/userController';
import { adminOnly, authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Route to get a user by ID
router.get('/:id', authenticate, getUser);

// Route to search users by term
router.get('/search/:term', authenticate, searchUser);

// Route to update a user
router.put('/:id', authenticate, updateUser);

// Route to delete a user
router.delete('/:id', authenticate, adminOnly, deleteUser);

export default router;
