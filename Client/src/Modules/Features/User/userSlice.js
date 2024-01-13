import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { userActionsAndReducers } from './userActionsAndReducers';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:userActionsAndReducers
})

export const {login,logOut, signUp} = userSlice.actions;

export function useUser() {return useSelector(state => state.user?.user)};

export function useToken() {return useSelector(state => state.user?.token)};

export default userSlice.reducer;