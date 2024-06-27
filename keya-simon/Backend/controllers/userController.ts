import { Request, Response } from 'express';
import { IUser } from '../models/User'; // Assuming IUser interface is defined
import { deleteUser as deleteUserService, getUserById, searchUsers, updateUser as updateUserService } from '../services/userService';

// Get a user by ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return; // Return after sending response
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Search users by term
export const searchUser = async (req: Request, res: Response): Promise<void> => {
  const searchTerm = req.params.term;
  try {
    const users = await searchUsers(searchTerm);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const user = req.user as IUser;
    // Authorization check: Users can only update their own profile or admins can update any profile
    if (userId !== user.id && !user.isAdmin) {
      res.status(403).json({ message: 'Unauthorized to update user' });
      return; // Return after sending response
    }

    const updatedUser = await updateUserService(userId, req.body);
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found or unauthorized update' });
      return; // Return after sending response
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    await deleteUserService(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
