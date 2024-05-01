import api from './api';

export const getUsers = async () => {
  const response = await api.get('/admin/users');
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get('/admin/posts');
  return response.data;
};

// Add more admin API functions as needed