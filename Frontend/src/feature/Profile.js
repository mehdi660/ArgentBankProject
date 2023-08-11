import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    token: "",
  },
  reducers: {
    profileData: (state, action) => {
      state.token = action.payload.response.body.token;
    },
  },
});

export const { profileData } = profileSlice.actions;
export default profileSlice.reducer;
