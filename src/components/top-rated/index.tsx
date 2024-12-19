import Loader from '../../pages/loader';
import {useGetTopRatedMoviesQuery} from '../../redux/slice/topRatedSlice';
import {MovieType} from '../../utils/types';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide';
import MovieCard from "../movieCard/MovieCard.tsx";

const TopRatedMovies = () => {
	const {data, isLoading, error} = useGetTopRatedMoviesQuery ();
	
	if (isLoading) return <Loader/>;
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
			{data?.map ((movie: MovieType) => (
				<SplideSlide key={movie.id} className="">
					<MovieCard movie={movie} key={movie.id}/>
				</SplideSlide>
			))}
		</Splide>
	);
};

export default TopRatedMovies;
