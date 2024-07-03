import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// Function to generate a random token
export const generateRandomToken = (): string => {
  return crypto.randomBytes(20).toString('hex');
};

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Function to compare a password with a hash
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
