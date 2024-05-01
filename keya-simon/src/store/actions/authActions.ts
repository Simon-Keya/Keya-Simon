import { createAction } from '@reduxjs/toolkit';
import { User } from '../types';

export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const SET_USER = 'auth/SET_USER';

export const login = createAction<User>(LOGIN);
export const logout = createAction(LOGOUT);
export const setUser = createAction<User>(SET_USER);