import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

// Add other configurations as needed
