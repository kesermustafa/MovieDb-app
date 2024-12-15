import {
  BsFillBookmarkHeartFill,
  BsFillBookmarkPlusFill,
} from 'react-icons/bs';
import Loader from '../../pages/loader';
import { useGetTopRatedMoviesQuery } from '../../redux/slice/topRatedSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { MovieType } from '../../utils/types';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide';

import { addFavorite, removeFavorite } from '../../redux/slice/favoritesSlice';
import { Link } from 'react-router-dom';
interface TopRatedProps {
  topRated: string;
}

const TopRatedMovies = () => {
  const { data, isLoading, error } = useGetTopRatedMoviesQuery();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;
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
      {data?.map((movie: MovieType) => (
        <SplideSlide key={movie.id} className="">
          <div
          
            className="bg-[var(--blue)] p-4 rounded-lg relative "
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
                className="rounded-md max-w-[200px] h-full  max-sm:max-w-[350px]"
              />

              <h3 className=" mt-2 text-center text-ellipsis line-clamp-1 max-w-[200px] max-sm:max-w-[350px]">
                {movie.title}
              </h3>
            </Link>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default TopRatedMovies;
