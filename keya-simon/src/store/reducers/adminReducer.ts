import { createReducer } from '@reduxjs/toolkit';
import { LOAD_USERS, LOAD_POSTS_ADMIN } from '../actions/adminActions';
import { User, BlogPost } from '../types';

interface AdminState {
  users: User[];
  posts: BlogPost[];
}

const initialState: AdminState = {
  users: [],
  posts: [],
};

const adminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_USERS, (state, action) => {
      state.users = action.payload;
    })
    .addCase(LOAD_POSTS_ADMIN, (state, action) => {
      state.posts = action.payload;
    });
});

export default adminReducer;