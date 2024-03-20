import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//@ts-ignore
export const kinopoiskApi = createApi({
  reducerPath: 'konopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.1/films',
    headers: { 'X-API-KEY': '0151e40e-32be-43a0-977d-0cb0257f5604' },
  }),
  endpoints: builder => ({
    getSearchByKeyword: builder.query({
      query: keyword => `search-by-keyword?keyword=${keyword}&page=1`,
    }),
  }),
})

export const { useGetSearchByKeywordQuery } = kinopoiskApi
