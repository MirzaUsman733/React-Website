import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../firebase';

export const fetchBlogPosts = createAsyncThunk(
  'blogPost/fetchData',
  async () => {
    const querySnapshot = await getDocs(collection(firestore, "bloging"));
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return posts;
  }
);

const blogSlice = createSlice({
  name: 'blogPost',
  initialState: {
    loading: false,
    blogPosts: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.blogPosts = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBlogPosts.rejected, (state, action) => {
      state.loading = false;
      state.blogPosts = [];
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
