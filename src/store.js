import { configureStore } from '@reduxjs/toolkit'
import authReducer from './pages/authSlice';
import blogReducer from './pages/blogSlice'
export const store = configureStore({
  reducer: {
    blog : blogReducer,
    auth: authReducer
  },
})
export default store;