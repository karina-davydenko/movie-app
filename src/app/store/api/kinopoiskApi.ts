import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { transformMovieById } from './transformResponses/transformMovieById'
import { transformSearch } from './transformResponses/transformSearch'
import type { ResultTopFilms } from './transformResponses/types'
import { transformTopMovies } from './transformResponses/transformTopMovies'

export const kinopoiskApi = createApi({
  reducerPath: 'konopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    headers: { 'X-API-KEY': '0151e40e-32be-43a0-977d-0cb0257f5604' },
  }),

  endpoints: builder => ({
    getTopMovies: builder.query<ResultTopFilms, void>({
      query: () => ({
        url: '/v2.2/films/collections?type=TOP_POPULAR_ALL',
        params: {
          page: 1,
        },
      }),
      transformResponse: transformTopMovies,
    }),
    getSearchByKeyword: builder.query({
      query: ({ query, page }) => ({
        url: `/v2.1/films/search-by-keyword?keyword=${query}`,
        params: {
          page,
        },
      }),
      transformResponse: transformSearch,
    }),
    getMovieById: builder.query({
      query: id => ({
        url: `/v2.2/films/${id}`,
      }),
      transformResponse: transformMovieById,
    }),
  }),
})

export const {
  useGetSearchByKeywordQuery,
  useGetTopMoviesQuery,
  useGetMovieByIdQuery,
} = kinopoiskApi
