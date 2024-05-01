import { createReducer } from '@reduxjs/toolkit';
import { LOGIN, LOGOUT, SET_USER } from '../actions/authActions';
import { User } from '../types';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    })
    .addCase(LOGOUT, () => {
      return initialState;
    })
    .addCase(SET_USER, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    });
});

export default authReducer;