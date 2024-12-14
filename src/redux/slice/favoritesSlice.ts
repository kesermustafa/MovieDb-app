import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../../utils/types';

interface FavoriteState {
  favorites: MovieType[];
}

const initialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'), 
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<MovieType>) => {
      if (!state.favorites.find((movie) => movie.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
