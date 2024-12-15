import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ5ZDUwOTc3ODY5YWMzYzEwMzBiNzhjNWRjMTljNCIsIm5iZiI6MTczMzgzNDk3My43ODIsInN1YiI6IjY3NTgzOGRkNDYwNDQ3YjA5ZGU0MGRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcZloGMKejdXdvSjPDW90AKJEGiIp-r5oBhUTMHS5oA`
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
