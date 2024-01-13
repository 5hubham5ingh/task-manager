import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../Features/User/userSlice";
import snackbarReducer from "../Features/Snackbar/snackbarSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer
  }
});