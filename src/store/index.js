import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './count';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;