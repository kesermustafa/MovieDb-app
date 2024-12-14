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
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
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
