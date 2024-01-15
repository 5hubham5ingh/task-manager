import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from "../Features/User/userSlice";
import snackbarReducer from "../Features/Snackbar/snackbarSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
