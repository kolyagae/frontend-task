import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, User } from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    fetchPostById: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
    fetchUserByUserName: builder.query<User[], string>({
      query: (username) => `/users?username=${username}`,
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useFetchPostByIdQuery,
  useLazyFetchUserByUserNameQuery,
} = api;
