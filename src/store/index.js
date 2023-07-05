import { configureStore } from "@reduxjs/toolkit";
import tenderReducer from "./slice/tender";
import hotelReducer from "./slice/hotel";

const store = configureStore({
   reducer: {
      tender: tenderReducer,
      hotel: hotelReducer,
   },
});

export default store;
