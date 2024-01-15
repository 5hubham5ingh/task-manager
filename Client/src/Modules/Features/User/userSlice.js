import {createSlice} from '@reduxjs/toolkit';
import { userActionsAndReducers } from './userActionsAndReducers';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:userActionsAndReducers
})

export const userActions = userSlice.actions;



export default userSlice.reducer;