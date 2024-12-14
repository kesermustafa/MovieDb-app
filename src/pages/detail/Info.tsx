import React from 'react';
import { imageURL } from '../../utils/constants';
import { MovieDetailType } from '../../utils/types';
import RatingCircle from '../../components/rating-circle';

type ButtonProps = {
  movie: MovieDetailType;
};

const Info = ({ movie }: ButtonProps) => {
  const backgroundImage = `${imageURL + movie.backdrop_path}`;

  return (
    <div
      className="flex flex-col sm:flex-row relative banner-container sm:text-white "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 max-sm:hidden"></div>
      <div className="backdrop-blur-md sm:p-10 sm:px-28 ">
        <div className="w-full  h-full flex flex-col sm:flex-row relative sm:gap-3 sm:pt-8">
          <div className="flex justify-center ">
            <img
              src={imageURL + movie.poster_path}
              className="object-cover rounded-sm shadow max-w-[320px]"
            />
          </div>
          <div className="flex-1 py-10 p-4 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider max-sm:text-center ">
              {movie.title}
            </h2>
            <div className="max-sm:absolute top-1 left-1">
              <RatingCircle rating={movie.vote_average} />
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              {movie.genres.map((genre, key) => (
                <span className="italic " key={key}>
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <p>Release Date : </p>
              <p>{movie.release_date}</p>
            </div>
            <div className="flex gap-2">
              <p>Spoken Languages : </p>
              {movie.spoken_languages.map((item) => (
                <span>{item.name}</span>
              ))}
            </div>
            <div className="text-justify lg:w-3/4">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
