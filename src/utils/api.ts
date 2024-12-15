import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ5ZDUwOTc3ODY5YWMzYzEwMzBiNzhjNWRjMTljNCIsIm5iZiI6MTczMzgzNDk3My43ODIsInN1YiI6IjY3NTgzOGRkNDYwNDQ3YjA5ZGU0MGRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcZloGMKejdXdvSjPDW90AKJEGiIp-r5oBhUTMHS5oA`,
  },
});

export default api;