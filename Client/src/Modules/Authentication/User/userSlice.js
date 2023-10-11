import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        login:(state,action)=>{return action.payload},
        logOut:(state,action)=>{state = null},
        signUp:(state,action)=>{state = action.payload}
    }
})

export const {login,logOut, signUp} = userSlice.actions;

export default userSlice.reducer;