/** @format */

import { useEffect } from "react";
import { MovieList } from "../../components";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/MovieSlice/MovieSlice";

function Movie() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
	}, [dispatch]);

	return (
		<div>
			<MovieList />
		</div>
	);
}

export default Movie;
