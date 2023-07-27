import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../feature/user.slice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
