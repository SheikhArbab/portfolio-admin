import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { usersApi } from '../services/usersApi'; 
import { authApi } from '../services/authApi'; 
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore'; 
import toggleReducer from '../features/toggleSlice';
import authReducer from '../features/authSlice';

// Combine reducers
const rootReducer = combineReducers({ 
  toggle: toggleReducer,
  auth: authReducer,
  [usersApi.reducerPath]: usersApi.reducer, 
  [authApi.reducerPath]: authApi.reducer, 
});

// Configure Redux persist
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware,authApi.middleware ),
});

// Create Redux persistor
export const persistor = persistStore(store);
