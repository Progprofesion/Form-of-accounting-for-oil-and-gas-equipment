import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/api/apiSlice";

import dataSlice from "./reducer/dataSlice";

const store = configureStore({
  reducer: {
    dataSlice,
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
