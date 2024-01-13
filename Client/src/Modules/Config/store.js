import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../Authentication/User/userSlice";
import snackbarReducer from "../Components/Snackbar/snackbarSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer
  }
});