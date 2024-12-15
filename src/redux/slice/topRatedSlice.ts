import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieType } from '../../utils/types';


export interface TopRatedResponse {
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export const topRatedApi = createApi({
  reducerPath: 'topRatedApi',
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
    getTopRatedMovies: builder.query<MovieType[], void>({
      query: () => '/movie/top_rated',
      transformResponse: (response: TopRatedResponse) => response.results,
    }),
  }),
});

export const { useGetTopRatedMoviesQuery } = topRatedApi;
