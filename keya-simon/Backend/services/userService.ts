import User, { IUser } from '../models/User'; // Import the User model and IUser interface
import logger from '../utils/logger';

// Get a user by ID
export const getUserById = async (id: string): Promise<IUser | null> => {
  try {
    return await User.findById(id).exec();
  } catch (error) {
    logger.error(`Error getting user by ID: ${error}`);
    throw new Error('Error getting user by ID');
  }
};

// Search users by term
export const searchUsers = async (term: string): Promise<IUser[]> => {
  try {
    return await User.find({
      $or: [
        { username: new RegExp(term, 'i') },
        { email: new RegExp(term, 'i') }
      ]
    }).exec();
  } catch (error) {
    logger.error(`Error searching users: ${error}`);
    throw new Error('Error searching users');
  }
};

// Update a user by ID
export const updateUser = async (id: string, updates: Partial<IUser>): Promise<IUser | null> => {
  try {
    return await User.findByIdAndUpdate(id, updates, { new: true }).exec();
  } catch (error) {
    logger.error(`Error updating user: ${error}`);
    throw new Error('Error updating user');
  }
};

// Delete a user by ID
export const deleteUser = async (id: string): Promise<void> => {
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    await user.deleteOne();
    logger.info(`User with ID ${id} deleted`);
  } catch (error) {
    logger.error(`Error deleting user: ${error}`);
    throw new Error('Error deleting user');
  }
};
