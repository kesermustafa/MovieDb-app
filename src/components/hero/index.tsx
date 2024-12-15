import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { MovieType } from '../../utils/types';
import { imageURL } from '../../utils/constants';

const Hero = () => {
  const [movie, setMovies] = useState<MovieType>();
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get('/movie/popular')
      .then((res) => {
        const movies = res.data.results;
        const random = Math.floor(Math.random() * movies.length);
        setMovies(movies[random]);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div
      className="h-[60vh] relative flex justify-center items-center"
      style={{
        backgroundImage: `url(${imageURL + movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="h-full w-full banner-ln bottom-0 absolute"></div>
      <div className="absolute inset-0 bg-[var(--dark-blue)] blur-3xl opacity-60 max-sm:hidden"></div>

      <h1 className="text-lg md:text-2xl lg:text-3xl text-white z-30 font-bold italic max-lg:px-4">
        Your ticket to endless entertainment! Start exploring a world of movies.
      </h1>
    </div>
  );
};

export default Hero;
