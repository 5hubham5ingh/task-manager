import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        login:(state,action)=>{return action.payload},
        logOut:(state,action)=>{return null},
        signUp:(state,action)=>{return action.payload}
    }
})

export const {login,logOut, signUp} = userSlice.actions;

export function useUser() {return useSelector(state => state.user?.user)};

export function useToken() {return useSelector(state => state.user?.token)};

export default userSlice.reducer;