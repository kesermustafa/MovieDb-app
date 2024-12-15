import React, { useEffect, useState } from 'react';
import { useGetGenresQuery } from '../../redux/slice/trendingGenreSlice';
import ReactSelect from 'react-select';
import { GenresType, MovieType } from '../../utils/types';
import Loader from '../../pages/loader';
import api from '../../utils/api';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide';

import {
  BsFillBookmarkHeartFill,
  BsFillBookmarkPlusFill,
} from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { addFavorite, removeFavorite } from '../../redux/slice/favoritesSlice';
import { Link } from 'react-router-dom';

interface FormattedOption {
  label: string;
  value: number;
}

const TrendingGenres: React.FC = () => {
  const { data, isLoading, error } = useGetGenresQuery();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);
  const [selectedGenre, setSelectedGenre] = useState<FormattedOption | number>(
    28
  );
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [apiError, setApiError] = useState<any>(null);

  useEffect(() => {
    const genreValue =
      typeof selectedGenre === 'object' ? selectedGenre.value : selectedGenre;

    const params = {
      with_genres: genreValue,
    };

    api
      .get('/discover/movie', { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => setApiError(err));
  }, [selectedGenre]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const formatted =
    data?.genres.map(
      (genre: GenresType): FormattedOption => ({
        label: genre.name,
        value: genre.id,
      })
    ) ?? [];

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[300px]">
        <ReactSelect
          isLoading={isLoading}
          isDisabled={isLoading}
          options={formatted}
          className=""
          onChange={(selectedOption) =>
            setSelectedGenre(selectedOption as FormattedOption)
          }
        />
      </div>

      {apiError && <div>Error fetching movies</div>}
      <div>
        {movies?.length > 0 ? (
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
            {movies.map((movie, index) => (
              <SplideSlide  key={movie.id} className="">
                <div
                  className="bg-gray-800 p-4 rounded-lg relative"
                >
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
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
};

export default TrendingGenres;
