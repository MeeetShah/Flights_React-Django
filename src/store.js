import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./flightsslice"; // Adjust path as necessary

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});