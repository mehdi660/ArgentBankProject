import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {},
  reducers: {
    setSignInData: (state, action) => {
      state.token = action.payload.response.body.token;
    },
  },
});

export const { setSignInData } = signInSlice.actions;
export default signInSlice.reducer;
