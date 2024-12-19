import { useAppSelector } from '../../utils/hooks';
import { MovieType } from '../../utils/types';
import { Link } from 'react-router-dom';
import MovieCard from "../../components/movieCard/MovieCard.tsx";

const FavoritesPage = () => {
  const {favorites} = useAppSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center gap-10">
        <p>No favorite movies added yet.</p>
        <h3 className={'flex gap-2'}>
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
            <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
