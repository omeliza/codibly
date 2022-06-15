import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IColor } from '../models/IColor';

export const url = process.env.REACT_APP_SERVER_API as string;

export const colorAPI = createApi({
  reducerPath: 'colorAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: (build) => ({
    fetchAllColors: build.query<IColor[], undefined>({
      query: () => ({
        url: `/products`
      }),
    })
  })
})