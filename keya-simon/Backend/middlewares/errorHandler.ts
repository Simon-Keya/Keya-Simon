import { NextFunction, Request, Response } from 'express';

// Custom error class to encapsulate HTTP status and message
export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Error handling middleware function
export const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default to 500 Internal Server Error if no status code is set
  let statusCode = err instanceof CustomError ? err.statusCode : 500;
  let message = err.message || 'Something went wrong';

  // Log the error for debugging purposes
  console.error(`[${new Date().toISOString()}] Error: ${message}`);

  // Ensure response status code is set appropriately
  res.status(statusCode).json({ error: message });
};

// Middleware to catch 404 errors (not found)
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(404, 'Not Found');
  next(error); // Passes the error to the error handling middleware
};
