import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import config from './config/config';
import blogRoutes from './routes/blogRoutes';
import userRoutes from './routes/userRoutes';
import logger from './utils/logger';

// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message || 'Internal Server Error');
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Check for the presence of dbUri in the config
const dbUri: string = config.dbUri || '';

if (!dbUri) {
  logger.error('MongoDB connection string (dbUri) is not defined.');
  process.exit(1); // Exit the process if dbUri is not defined
}

// Connect to MongoDB
mongoose.connect(dbUri, {})
  .then(() => {
    logger.info('MongoDB connected');
  })
  .catch((error) => {
    logger.error('MongoDB connection error:', error);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
