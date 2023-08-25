import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/userSlice';
import useReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default store;
