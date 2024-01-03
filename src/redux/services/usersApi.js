import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/SuperTech/', 
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ currentPage, pageSize, searchTerm }) => `users?page=${currentPage}&limit=${pageSize}&search=${searchTerm}`,
      providesTags: ['users'],
    }),
    getUserById: builder.query({
      query: (id) => `user/${id}`,
      providesTags: ['users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['users'],
    }),
    editUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `edit-user/${id}`,
        method: 'PUT',
        body: { id, ...user },
      }),
      invalidatesTags: ['users'],
    }),
    addCareer: builder.mutation({
      query: (body) => ({
        url: `/career`,
        method: 'POST',
        body: body,
      }),
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `/new-user`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useEditUserMutation,
  useAddUserMutation,
  useAddCareerMutation
} = usersApi;
