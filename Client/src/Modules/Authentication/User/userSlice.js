import {createSlice} from '@reduxjs/toolkit';

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

export default userSlice.reducer;