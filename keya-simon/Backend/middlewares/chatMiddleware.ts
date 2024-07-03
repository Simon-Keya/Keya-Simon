import { NextFunction, Request, Response } from 'express';

// Example middleware for chatroom functionality
export const exampleChatMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Implement middleware logic here if needed
  next();
};

// Middleware to validate message content
export const validateMessageContent = (req: Request, res: Response, next: NextFunction) => {
  const { content } = req.body;

  if (!content || typeof content !== 'string') {
    return res.status(400).json({ message: 'Message content is required and must be a string' });
  }

  next();
};
