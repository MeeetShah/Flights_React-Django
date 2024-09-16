import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./flightsSlice"; // Adjust path as necessary

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});
