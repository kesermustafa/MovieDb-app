import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import api from '../../utils/api';
import Loader from '../loader';
import Button from './Button';
import Info from './Info';
import ActorList from './ActorList';
import { MovieDetailType } from '../../utils/types';
import Undefined from '../undefined';

const Detail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [movie, setMovie] = useState<MovieDetailType | null>(null);
	const [error, setError] = useState<string | null>(null);
	
	useEffect(() => {
		// Scroll to top when component mounts
		scroll.scrollToTop({
			duration: 500,
			smooth: 'smooth'
		});
	}, []);
	
	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const params = {
					language: 'en-US',
					append_to_response: 'credits,videos',
				};
				const response = await api.get(`/movie/${id}`, { params });
				setMovie(response.data);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching movie details.';
				setError(errorMessage);
			}
		};
		
		fetchMovieDetails();
	}, []);
	
	if (error) return <Undefined />;
	if (!movie) return <Loader />;
	
	return (
		<div className="min-h-screen">
			<div className="relative">
				<div className="flex justify-end absolute end-2 top-2 z-10">
					<Button movie={movie} />
				</div>
			</div>
			
			<div>
				<Info movie={movie} />
			</div>
			
			<ActorList actors={movie.credits.cast} />
		</div>
	);
};

export default Detail;