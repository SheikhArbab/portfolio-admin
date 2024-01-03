import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    user: builder.mutation({
      query: (user) => ({
        url: 'auth/signin',
        method: 'POST',
        body: user,
      }),
    }),
    signout: builder.mutation({
      query: () => ({
        url: 'auth/signout',
        method: 'GET',
      }),
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'auth/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, updateData }) => {
        return {
          url: `/auth/signin/update/${userId}`,
          method: 'PATCH',
          body: updateData,
        };
      },
      invalidatesTags: ['users'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `auth/signin/delete/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
 
 
  }),
});

export const {
  useCreateUserMutation,
  useUserMutation,  
  useDeleteUserMutation,
  useUpdateUserMutation, 
  useSignoutMutation
} = authApi;
