import React from 'react';
import {BsFillBookmarkDashFill, BsFillBookmarkHeartFill, BsFillBookmarkPlusFill} from "react-icons/bs";
import {addFavorite, removeFavorite} from "../../redux/slice/favoritesSlice.ts";
import {Link, useLocation} from "react-router-dom";
import {MovieType} from "../../utils/types.ts";
import {useGetMoviesQuery} from "../../redux/slice/movieSlice.ts";
import {useAppDispatch, useAppSelector} from "../../utils/hooks.ts";

interface Props {
	movie: MovieType;
	category?: string;
}

const MovieCard: React.FC<Props> = ({category, movie}: Props) => {
	
	if (category) {
		const {data, isLoading, error} = useGetMoviesQuery ({category, page: 1});
	}
	
	const dispatch = useAppDispatch ();
	const favorites = useAppSelector ((state) => state.favorites.favorites);
	const isFavorite = (id: number) => favorites.some ((movie) => movie.id === id);
	
	const location = useLocation ();
	const isFavoritesPage = location.pathname === '/favorites';
	
	return (
		<div className="bg-gray-800 p-4 rounded-lg relative">
			<div className="absolute end-3 ">
				
				{
					isFavoritesPage ? (<BsFillBookmarkDashFill
						className="text-4xl text-red-500 cursor-pointer"
						onClick={() => dispatch (removeFavorite (movie.id))}
					/>) : !isFavorite (movie.id) ? (
						<BsFillBookmarkPlusFill
							className="text-4xl text-white cursor-pointer"
							onClick={() =>
								isFavorite (movie.id)
									? dispatch (removeFavorite (movie.id))
									: dispatch (addFavorite (movie))
							}
						/>
					) : (
						<BsFillBookmarkHeartFill
							className="text-4xl text-green-500 cursor-pointer "
							onClick={() =>
								isFavorite (movie.id)
									? dispatch (removeFavorite (movie.id))
									: dispatch (addFavorite (movie))
							}
						/>
					)
				}
			</div>
			
			<Link to={`/detail/${movie.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					className="rounded-md max-w-[200px] max-sm:max-w-[350px] "
				/>
				
				<h3 className="text-white mt-2 text-center text-ellipsis line-clamp-1 max-w-[200px] max-sm:max-w-[350px]">
					{movie.title}
				</h3>
			</Link>
		</div>
	);
};

export default MovieCard;
