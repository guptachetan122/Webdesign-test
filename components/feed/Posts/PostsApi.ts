import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PostType {
 id: number; name: string; username: string; email: string;
}[]

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostType[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchPostsQuery } = postsApi;
