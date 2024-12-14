import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<any, { category: string; page: number }>({
      query: ({ category, page }) =>
        `/movie/${category}?language=en-US&page=${page}`,
    }),
    getMovieDetails: builder.query<any, number>({
      query: (id) => `/movie/${id}?language=en-US`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = movieApi;
