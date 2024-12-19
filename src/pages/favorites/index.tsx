import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { removeFavorite } from '../../redux/slice/favoritesSlice';
import { MovieType } from '../../utils/types';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    const favorites = useAppSelector((state) => state.favorites.favorites); // Access favorites safely
    const dispatch = useAppDispatch();
    
   
  if (!favorites || favorites.length === 0) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center gap-10">
        <p>No favorite movies added yet.</p>
        <h3>
          You can visit
          <Link to="/" className="text-blue-600 font-semibold">
            home page
          </Link>
          to create favorites.
        </h3>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-8 pb-12'>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 px-5">
        {favorites.map((movie: MovieType) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg relative">
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md"
              />
            </Link>

            <h3 className="text-white mt-2 text-center">{movie.title}</h3>
            <div className=" absolute top-3 end-3">
              <BsFillBookmarkDashFill
                className="text-4xl text-red-500 cursor-pointer"
                onClick={() => dispatch(removeFavorite(movie.id))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
