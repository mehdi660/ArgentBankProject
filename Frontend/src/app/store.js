import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../feature/SignIn";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
