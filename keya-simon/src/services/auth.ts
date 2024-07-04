// auth.ts

import axios from 'axios';
import { API_BASE_URL } from './api'; // Importing the base URL from api.ts

// Function to authenticate user
export const authenticateUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data; // Assuming the response contains user data and token
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

// Function to register user
export const registerUser = async (name: string, email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { name, email, password });
    return response.data; // Assuming the response contains user data and token
  } catch (error) {
    throw new Error('Registration failed');
  }
};

// Function to get user details by username
export const getUserByUsername = async (username: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?username=${username}`);
    return response.data; // Assuming the response contains user details
  } catch (error) {
    throw new Error('User not found');
  }
};

// Function to get user details by user ID
export const getUserById = async (userId: number): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data; // Assuming the response contains user details
  } catch (error) {
    throw new Error('User not found');
  }
};
