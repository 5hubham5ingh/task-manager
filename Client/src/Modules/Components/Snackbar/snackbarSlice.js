import { createSlice } from "@reduxjs/toolkit";


export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState:{
        message:"",
        severity:"success",
        visibility: false
    },
    reducers:{
        showSnackbar:(state,action)=>{
            state = {
                message:action.payload.message,
                severity: action.payload.severity,
                visibility: true
            }
        },
        hideSnackbar: state =>{
            state = {...state, visibility:false}
        }

    }
});

export const {showSnackbar, hideSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;