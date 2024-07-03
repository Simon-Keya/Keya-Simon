import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import pgPromise from 'pg-promise';
import { JWT_SECRET } from '../config/index'; // Ensure you have this in your config
import { IUser } from '../models/User';
import { sendPasswordResetEmail } from '../utils/emailService'; // Assuming you have a utility for sending emails

const pgp = pgPromise();
const db = pgp({ /* Database connection details */ }); // Configure your database connection

// Function to register a new user
export async function registerUser(userData: any): Promise<IUser> {
  // Hash password before saving
  userData.password = await bcrypt.hash(userData.password, 10);

  try {
    const client = await db.connect();
    const result = await client.query(
      'INSERT INTO users (username, email, password, is_admin) VALUES ($1, $2, $3, $4) RETURNING *',
      [
        userData.username,
        userData.email,
        userData.password,
        // Set default is_admin to false
        false,
      ]
    );
    const newUser = result[0] as IUser;
    client.done();
    return newUser;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Function to log in a user
export async function loginUser(credentials: any): Promise<{ token: string; user: IUser }> {
  try {
    const client = await db.connect();
    const result = await client.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [credentials.username || credentials.email, credentials.username || credentials.email]
    );
    const user = result[0] as IUser;

    if (!user) {
      throw new Error('Invalid username or email');
    }

    const isMatch = await bcrypt.compare(credentials.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    client.done();

    // Generate JWT token with user ID and isAdmin as payload
    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Function to initiate password reset
export async function initiatePasswordReset(email: string): Promise<void> {
  try {
    const client = await db.connect();
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result[0] as IUser;

    if (!user) {
      throw new Error('No user found with that email');
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpires = new Date(Date.now() + 3600000); // Token expires in 1 hour

    // Store reset token and expiration in the database
    await client.query(
      'UPDATE users SET reset_password_token = $1, reset_password_expires = $2 WHERE email = $3',
      [resetToken, resetTokenExpires, email]
    );

    client.done();

    // Send reset email
    await sendPasswordResetEmail(email, resetToken);

  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Function to reset password
export async function resetPassword(resetToken: string, newPassword: string): Promise<void> {
  try {
    const client = await db.connect();
    const result = await client.query(
      'SELECT * FROM users WHERE reset_password_token = $1 AND reset_password_expires > NOW()',
      [resetToken]
    );
    const user = result[0] as IUser;

    if (!user) {
      throw new Error('Invalid or expired password reset token');
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear reset token fields
    await client.query(
      'UPDATE users SET password = $1, reset_password_token = $2, reset_password_expires = $3 WHERE id = $4',
      [hashedPassword, null, null, user.id]
    );

    client.done();
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Function to change password (requires user to be logged in)
export async function changePassword(userId: number, oldPassword: string, newPassword: string): Promise<void> {
  try {
    const client = await db.connect();
    const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    const user = result[0] as IUser;

    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      throw new Error('Old password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await client.query('UPDATE users SET password = $1 WHERE id = $2', [hashedNewPassword, user.id]);

    client.done();
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

