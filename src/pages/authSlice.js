import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName } = action.payload;
      return { uid, email, displayName };
    },
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
