import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Modules/Authentication/User/userSlice";
import snackbarReducer from "./Modules/Components/Snackbar/snackbarSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer
  }
});