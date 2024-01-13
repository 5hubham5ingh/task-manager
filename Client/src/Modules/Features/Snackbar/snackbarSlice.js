import { createSlice } from "@reduxjs/toolkit";
import { snackbarActionsAndReducers } from "./snackbarActionsAndReducers";


export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState:{
        message:"",
        severity:"success",
        visibility: false
    },
    reducers:snackbarActionsAndReducers
});

export const {showSnackbar, hideSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;