import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
  // loading: false,
  blogPosts: [],
  // error: ''
};

export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchData',
  async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'bloging'));
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return posts;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchBlogPosts.pending, (state) => {
    //   state.loading = true;
    // });
    builder.addCase(fetchBlogPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.blogPosts = action.payload;
      state.error = '';
    });
    // builder.addCase(fetchBlogPosts.rejected, (state, action) => {
    //   state.loading = false;
    //   state.blogPosts = [];
    //   state.error = action.error.message;
    // });
  }
});

export const { actions: blogActions } = blogSlice;
export default blogSlice.reducer;
