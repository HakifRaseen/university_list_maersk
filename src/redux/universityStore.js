import { configureStore } from "@reduxjs/toolkit";
import universityReducer from "./universityReducer";

const store = configureStore({
  reducer: {
    universityList: universityReducer,
  },
});

export default store;
