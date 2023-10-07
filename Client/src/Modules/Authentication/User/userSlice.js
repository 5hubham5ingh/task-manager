import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        login:(state,action)=>{alert('logIn')},
        logOut:(state,action)=>{alert('logOut')},
        signUp:(state,action)=>{alert('signUp')}
    }
})

export const {login,logOut, signUp} = userSlice.actions;

export default userSlice.reducer;