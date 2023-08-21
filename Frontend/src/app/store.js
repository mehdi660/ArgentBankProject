import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../feature/SignIn";
import ProfileReducer from "../feature/Profile";

export default configureStore({
  reducer: {
    signIn: signInReducer,
    profile: ProfileReducer,
  },
});
