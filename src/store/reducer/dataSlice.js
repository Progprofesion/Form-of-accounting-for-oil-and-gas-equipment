import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  measurementDate: 0,
  measurementTime: 0,
  arrData: [],
};

const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMeasurementDate: (state, action) => {
      state.measurementDate = action.payload;
    },
    setMeasurementTime: (state, action) => {
      state.measurementDate = action.payload;
    },
  },
});

export const { setMeasurementDate, setMeasurementTime } = data.actions;

export default data.reducer;
