import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';
import adminReducer from './reducers/adminReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    admin: adminReducer,
  },
});