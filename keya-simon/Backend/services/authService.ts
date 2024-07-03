import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config/config';
import User, { IUser } from '../models/User';

// Function to retrieve a user by ID from the database
export const getUserById = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error: any) { // Explicitly specify the type of 'error'
    throw new Error(`Error fetching user by ID: ${error.message}`);
  }
};

// Middleware function to authenticate and authorize user
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extract token from request headers
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Authorization denied, token missing' });
    }

    if (!config.jwtSecret) {
      throw new Error('JWT secret is not defined in the configuration');
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload & { userId: string };

    // Fetch user from database based on decoded userId
    const user = await getUserById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach user object to the request for further handling
    req.user = user;
    next();
  } catch (error: any) { // Explicitly specify the type of 'error'
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
