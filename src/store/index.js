import { configureStore } from "@reduxjs/toolkit";
import tenderReducer from "./slice/tender";

const store = configureStore({
   reducer: {
      tender: tenderReducer,
   },
});

export default store;
