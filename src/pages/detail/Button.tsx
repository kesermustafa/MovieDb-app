import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../utils/hooks';
import { addFavorite, removeFavorite } from '../../redux/slice/favoritesSlice';
import {
  BsFillBookmarkHeartFill,
  BsFillBookmarkPlusFill,
} from 'react-icons/bs';
import { MovieDetailType } from '../../utils/types';

type ButtonProps = {
  movie: MovieDetailType;
};

const Button = ({ movie }: ButtonProps) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);
  const dispatch = useDispatch();

  return (
    <div className="">
      {!isFavorite(movie.id) ? (
        <div
          onClick={() =>
            isFavorite(movie.id)
              ? dispatch(removeFavorite(movie.id))
              : dispatch(addFavorite(movie))
          }
          className="flex items-center bg-white/40 text-white gap-2 px-3 py-1 rounded  sm:w-[280px] cursor-pointer"
        >
          <BsFillBookmarkPlusFill className="text-3xl text-blue-600" />
          <span className="max-sm:hidden">Add to Favorites</span>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 px-3 py-1 rounded text-white bg-white/40  sm:w-[280px] cursor-pointer"
          onClick={() =>
            isFavorite(movie.id)
              ? dispatch(removeFavorite(movie.id))
              : dispatch(addFavorite(movie))
          }
        >
          <BsFillBookmarkHeartFill className="text-3xl text-green-500 " />
          <span className="max-sm:hidden"> Remove From Favorites</span>
        </div>
      )}
    </div>
  );
};

export default Button;
