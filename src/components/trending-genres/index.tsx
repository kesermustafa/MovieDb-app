import React, {useEffect, useState, useMemo} from 'react';
import {useGetGenresQuery} from '../../redux/slice/trendingGenreSlice';
import ReactSelect from 'react-select';
import {GenresType, MovieType} from '../../utils/types';
import Loader from '../../pages/loader';
import api from '../../utils/api';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide';
import MovieCard from "../movieCard/MovieCard.tsx";

interface FormattedOption {
	label: string;
	value: number;
}

const TrendingGenres: React.FC = () => {
	const {data, isLoading, error} = useGetGenresQuery ();
	
	const [selectedGenre, setSelectedGenre] = useState<FormattedOption | number> (
		28
	);
	
	const [movies, setMovies] = useState<MovieType[]> ([]);
	const [apiError, setApiError] = useState<any> (null);
	
	
	const genreValue = useMemo (() => {
		return typeof selectedGenre === 'object' ? selectedGenre.value : selectedGenre;
	}, [selectedGenre]);
	
	
	useEffect (() => {
		const fetchMovies = async () => {
			try {
				const params = {
					with_genres: genreValue,
				};
				
				const res = await api.get ('/discover/movie', {params});
				setMovies (res.data.results);
			} catch (err) {
				setApiError (err);
			}
		};
		
		fetchMovies ();
	}, [genreValue]);
	
	if (isLoading) return <Loader/>;
	if (error) return <div>Error</div>;
	
	const formatted =
		data?.genres.map (
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
						setSelectedGenre (selectedOption as FormattedOption)
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
						{movies.map ((movie, index) => (
							<SplideSlide key={movie.id} className="">
								<MovieCard movie={movie}/>
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