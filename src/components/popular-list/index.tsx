import React from 'react';
import {useGetMoviesQuery} from '../../redux/slice/movieSlice';
import {MovieType} from '../../utils/types';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Loader from '../../pages/loader';
import MovieCard from "../movieCard/MovieCard.tsx";

interface MovieListProps {
	category: string;
}

const PopularList: React.FC<MovieListProps> = ({category}) => {
	const {data, isLoading, error} = useGetMoviesQuery ({category, page: 1});
	
	if (isLoading) return <Loader/>;
	if (error) return <div>Error...</div>;
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
			{data?.results.map ((movie: MovieType) => (
				<SplideSlide key={movie.id}>
					<MovieCard movie={movie} key={movie.id} category={category}/>
				</SplideSlide>
			))}
		</Splide>
	);
};

export default PopularList;
