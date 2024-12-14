import React from 'react';
import { useGetMoviesQuery } from '../../redux/slice/movieSlice';
import { MovieType, PopularType } from '../../utils/types';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide';

import { Link } from 'react-router-dom';
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkHeartFill,
} from 'react-icons/bs';
import { addFavorite, removeFavorite } from '../../redux/slice/favoritesSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import Loader from '../../pages/loader';

interface SliderProps {
  movies: PopularType;
  imageURL: string;
}

interface MovieListProps {
  category: string;
}

const PopularList: React.FC<MovieListProps> = ({ category }) => {
  const { data, isLoading, error } = useGetMoviesQuery({ category, page: 1 });
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);

  if (isLoading) return <Loader />;
  if (error) return <div>Error...</div>;
  return (
    <Splide
      options={{
        pagination: false,
        autoWidth: true,
        gap: '15px',
        type: 'loop',
        autoplay: true,
        interval: 2500,
      }}
    >
      {data?.results.map((movie: MovieType) => (
        <SplideSlide key={movie.id} className="">
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg relative">
            <div className="absolute end-3 ">
              {!isFavorite(movie.id) ? (
                <BsFillBookmarkPlusFill
                  className="text-4xl text-white cursor-pointer"
                  onClick={() =>
                    isFavorite(movie.id)
                      ? dispatch(removeFavorite(movie.id))
                      : dispatch(addFavorite(movie))
                  }
                />
              ) : (
                <BsFillBookmarkHeartFill
                  className="text-4xl text-green-500 cursor-pointer "
                  onClick={() =>
                    isFavorite(movie.id)
                      ? dispatch(removeFavorite(movie.id))
                      : dispatch(addFavorite(movie))
                  }
                />
              )}
            </div>

            <Link to={`/detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md max-w-[200px] max-sm:max-w-[350px] "
              />

              <h3 className="text-white mt-2 text-center text-ellipsis line-clamp-1 max-w-[200px] max-sm:max-w-[350px]">
                {movie.title}
              </h3>
            </Link>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default PopularList;
