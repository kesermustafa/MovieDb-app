import React from 'react';
import { BsFillBookmarkDashFill, BsFillBookmarkHeartFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { addFavorite, removeFavorite } from "../../redux/slice/favoritesSlice";
import { Link, useLocation } from "react-router-dom";
import { MovieType } from "../../utils/types";
import { useGetMoviesQuery } from "../../redux/slice/movieSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

interface Props {
	movie: MovieType;
	category?: string;
}

const MovieCard: React.FC<Props> = ({ category, movie }) => {

	const { data, isLoading, error } = category ? useGetMoviesQuery({ category, page: 1 }) : { data: null, isLoading: false, error: null };
	
	const dispatch = useAppDispatch();
	const favorites = useAppSelector((state) => state.favorites.favorites);
	const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);

	
	const handleFavoriteClick = () => {
		if (isFavorite(movie.id)) {
			dispatch(removeFavorite(movie.id));
		} else {
			dispatch(addFavorite(movie));
		}
	};
	
	const BookmarkIcon = () => {
		
		return isFavorite(movie.id) ? (
			<BsFillBookmarkHeartFill
				className="text-4xl text-green-500 cursor-pointer"
				onClick={handleFavoriteClick}
			/>
		) : (
			<BsFillBookmarkPlusFill
				className="text-4xl text-white cursor-pointer"
				onClick={handleFavoriteClick}
			/>
		);
	};
	
	return (
		<div className="bg-gray-800 p-4 rounded-lg relative group">
			<div className="absolute right-2 top-2 z-10">
				<BookmarkIcon />
			</div>
			
			<Link to={`/detail/${movie.id}`} className="block">
				<div className="relative overflow-hidden">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
						className="rounded-md w-full max-w-[200px] max-sm:max-w-[350px] mx-auto transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				
				<h3 className="text-white mt-2 text-center truncate max-w-[200px] max-sm:max-w-[350px] mx-auto">
					{movie.title}
				</h3>
			</Link>
		</div>
	);
};

export default MovieCard;