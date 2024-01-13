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
            return {
                message:action.payload.message,
                severity: action.payload.severity,
                visibility: true,
                autoHideDuration: action.payload.autoHide ? 2500 : null
            }
        },
        hideSnackbar: state =>{
            return {...state, visibility:false}
        }

    }
});

export const {showSnackbar, hideSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;