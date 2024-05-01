import { createReducer } from '@reduxjs/toolkit';
import { LOAD_POSTS, LOAD_POST_DETAIL, CREATE_POST } from '../actions/blogActions';
import { BlogPost } from '../types';

interface BlogState {
  posts: BlogPost[];
  postDetail: BlogPost | null;
}

const initialState: BlogState = {
  posts: [],
  postDetail: null,
};

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_POSTS, (state, action) => {
      state.posts = action.payload;
    })
    .addCase(LOAD_POST_DETAIL, (state, action) => {
      state.postDetail = action.payload;
    })
    .addCase(CREATE_POST, (state, action) => {
      state.posts.push(action.payload);
      state.postDetail = action.payload;
    });
});

export default blogReducer;