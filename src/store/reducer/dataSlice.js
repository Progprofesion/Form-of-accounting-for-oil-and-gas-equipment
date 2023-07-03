import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  measurementDate: 0,
  measurementTime: 0,
  department: 0,
  data: 0,
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
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setMeasurementDate,
  setMeasurementTime,
  setDepartment,
  setData,
} = data.actions;

export default data.reducer;
