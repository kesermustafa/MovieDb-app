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
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ5ZDUwOTc3ODY5YWMzYzEwMzBiNzhjNWRjMTljNCIsIm5iZiI6MTczMzgzNDk3My43ODIsInN1YiI6IjY3NTgzOGRkNDYwNDQ3YjA5ZGU0MGRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcZloGMKejdXdvSjPDW90AKJEGiIp-r5oBhUTMHS5oA`
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
