import mongoose, { ConnectOptions } from 'mongoose';
import { MONGODB_URI } from './index'; // Adjust the import based on your actual file structure

const connectOptions: ConnectOptions = {};

mongoose.connect(MONGODB_URI, connectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;