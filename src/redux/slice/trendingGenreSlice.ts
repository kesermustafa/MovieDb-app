import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GenresType } from '../../utils/types';

interface GenresResponse {
  genres: GenresType[];
}

export const genreApi = createApi({
  reducerPath: 'genreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenresResponse, void>({
      query: () => 'genre/movie/list?language=en',
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
