import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import secretVar from "../../../config/secretVariables.js"


const apiBaseURL = secretVar.serverBaseUrl; // replace with your API URL

export const userApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL, credentials: 'include' }),
  endpoints: (builder) => ({
    //1. to create account
    createAccount: builder.mutation({
      query: (userDetails) => ({
        url: '/users/create-account',
        method: 'POST',
        body: userDetails,
      }),
    }),
    //2. to login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    //3. to logout
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateAccountMutation, useLoginMutation, useLogoutMutation } = userApiSlice;
