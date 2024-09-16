import { createSlice } from "@reduxjs/toolkit";

// Initial state for flights (an empty array)
const initialState = {
  flights:[]
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      // Add a new flight to the state
      
      state.flights = (action.payload);
    },
  },
});

// Export the action to be dispatched
export const { addFlight } = flightsSlice.actions;

// Export the reducer to be used in the store
export default flightsSlice.reducer;
