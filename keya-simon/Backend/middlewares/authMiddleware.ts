import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
import { getUserById } from '../services/authService';

// Define an interface for authenticated requests
interface AuthenticatedRequest extends Request {
  user?: IUser; // Ensure user property is optional and of type IUser
}

// Middleware function to authenticate user based on JWT token
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await getUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    (req as AuthenticatedRequest).user = user; // Type cast req to AuthenticatedRequest
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Token verification failed' });
  }
};

// Middleware function to restrict access to admins only
export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  const authReq = req as AuthenticatedRequest; // Type cast req to AuthenticatedRequest
  if (!authReq.user || !authReq.user.isAdmin) {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};
