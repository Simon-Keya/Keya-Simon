import { createAction } from '@reduxjs/toolkit';
import { User, BlogPost } from '../types';

export const LOAD_USERS = 'admin/LOAD_USERS';
export const LOAD_POSTS_ADMIN = 'admin/LOAD_POSTS_ADMIN';

export const loadUsers = createAction<User[]>(LOAD_USERS);
export const loadPostsAdmin = createAction<BlogPost[]>(LOAD_POSTS_ADMIN);