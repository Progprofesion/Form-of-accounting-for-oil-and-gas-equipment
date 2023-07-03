import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["db"],
  endpoints: (builder) => ({
    getDb: builder.query({
      query: () => "/db",
      providesTags: ["db"],
    }),
    getInputs: builder.query({
      query: () => "/inputs",
      providesTags: ["inputs"],
    }),
    getDescr: builder.query({
      query: () => "/description",
      providesTags: ["description"],
    }),
  }),
});

export const { useGetDbQuery, useGetInputsQuery, useGetDescrQuery } = apiSlice;
