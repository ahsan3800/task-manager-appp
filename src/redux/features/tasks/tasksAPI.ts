
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export interface Task {
  id: string;
  title: string;
  completed: boolean;
}



const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;


export const callApiData = createApi({ 

  reducerPath: 'callApiData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Tasks'],


  endpoints: (builder) => ({


    getTasks: builder.query<Task[], void>({
      query: () => '',
      providesTags: (result) =>
        result
          ? [
              ...result.map((task) => ({ type: "Tasks" as const, id: task.id })),
              { type: "Tasks" as const, id: "LIST" }
            ]
          : [{ type: "Tasks" as const, id: "LIST" }],
      }),


    addTask: builder.mutation<Task, Omit<Task, 'id'>>({
      query: (task) => ({
        url: '',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),



    updateTask: builder.mutation<Task, { id: string; updates: Partial<Task> }>({
      query: ({ id, updates }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tasks', id }],
    }),



    deleteTask: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Tasks', id }],
    }),


  }),

  
});



export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation,} = callApiData;
