import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || undefined,
  },
  reducers: {
    loginUser: (state, action) => {
      state.accessToken = action.payload;
    },
    logoutUser: (state) => {
      state.accessToken = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
