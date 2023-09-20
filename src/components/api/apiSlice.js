import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-vercel-mocha.vercel.app/",
  }),
  tagTypes: ["db"],
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["db"],
    }),
    getDb: builder.query({
      query: () => "/db",
      providesTags: ["db"],
    }),
    getInputs: builder.query({
      query: () => "/inputs",
    }),
    getDescr: builder.query({
      query: () => "/description",
    }),
  }),
});

export const {
  useGetDbQuery,
  useGetInputsQuery,
  useGetDescrQuery,
  useCreatePostMutationQuery,
} = apiSlice;
