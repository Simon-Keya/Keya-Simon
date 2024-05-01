import { createAction } from '@reduxjs/toolkit';
import { BlogPost } from '../types';

export const LOAD_POSTS = 'blog/LOAD_POSTS';
export const LOAD_POST_DETAIL = 'blog/LOAD_POST_DETAIL';
export const CREATE_POST = 'blog/CREATE_POST';

export const loadPosts = createAction<BlogPost[]>(LOAD_POSTS);
export const loadPostDetail = createAction<BlogPost | null>(LOAD_POST_DETAIL);
export const createPost = createAction<BlogPost>(CREATE_POST);