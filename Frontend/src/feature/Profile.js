import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
  },
  reducers: {
    setProfileData: (state, action) => {
      state.email = action.payload?.data?.body?.email;
      state.userName = action.payload?.data?.body?.userName;
      state.firstName = action.payload?.data?.body?.firstName;
      state.lastName = action.payload?.data?.body?.lastName;
    },
    setEditUserName: (state, action) => {
      state.userName = action.payload.editUserName;
    },
  },
});

export const { setProfileData, setEditUserName } = profileSlice.actions;
export default profileSlice.reducer;
