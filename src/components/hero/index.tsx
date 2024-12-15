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
      className="h-[60vh] relative -z-50 flex justify-center items-center"
/*      style={{
        backgroundImage: `url(${imageURL + movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}*/
    >
        <img className={'object-cover w-full h-full -z-50'} src={`${imageURL + movie?.backdrop_path}`} alt=""/>
      {/*<div className="h-full w-full bg-[linear-gradient(180deg,rgba(31,41,55,0.1)60%,rgba(251,248,239,1)100%)] bottom-0 absolute"></div>*/}
      <div className="banner-ln"></div>
      <div className="absolute inset-0 bg-[var(--dark-blue)] blur-3xl opacity-60 max-sm:hidden"></div>

      <h1 className="text-lg md:text-2xl lg:text-3xl absolute text-white z-30 font-bold italic max-lg:px-4">
        Your ticket to endless entertainment! Start exploring a world of movies.
      </h1>
    </div>
  );
};

export default Hero;
