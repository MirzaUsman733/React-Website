import { configureStore } from '@reduxjs/toolkit'
// import blogReducer from './pages/userSlice'
import blogReducer from './pages/blogSlice'
export const store = configureStore({
  reducer: {
    blog : blogReducer,
  },
})
export default store;