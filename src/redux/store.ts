import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './slice/movieSlice';
import favoritesReducer from './slice/favoritesSlice';
import { topRatedApi } from './slice/topRatedSlice';
import { genreApi } from './slice/trendingGenreSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [topRatedApi.reducerPath]: topRatedApi.reducer,
    [genreApi.reducerPath]: genreApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      topRatedApi.middleware,
      genreApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
