import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import Error from '../error';
import Loader from '../loader';
import Button from './Button';
import Info from './Info';
import ActorList from './ActorList';
import { MovieDetailType } from '../../utils/types';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const params = {
      language: 'en-US',
      append_to_response: 'credits,videos',
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <div>Error</div>;
  if (!movie) return <Loader />;

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="relative flex flex-col">
          <div className="flex justify-end absolute end-2 top-2 z-10">
            <Button movie={movie} />
          </div>
        </div>

        <div className="">
          <Info movie={movie} />
        </div>

        <ActorList actors={movie.credits.cast} />
      </div>
    </div>
  );
};

export default Detail;
